export type TransactionType = "DEPLOY" | "INVOKE" | "DECLARE";

export type TransactionStatus =
    | "NOT_RECEIVED"
    | "RECEIVED"
    | "PENDING"
    | "REJECTED"
    | "ACCEPTED_ON_L2"
    | "ACCEPTED_ON_L1";

type Builtins =
    | "pedersen"
    | "range_check"
    | "bitwise"
    | "output"
    | "ecdsa"
    | "ec_op";

export interface ExecutionResources {
    builtin_instance_counter: {
        [Property in `${Builtins}_builtin`]: string;
    };
    n_memory_holes: number;
    n_steps: number;
}

export interface TransactionEvent {
    from_address: string;
    keys: string[];
    data: string[];
}

export interface TraceEvent extends Omit<TransactionEvent, "from_address"> {
    order: number;
}

export interface L2ToL1Message {
    payload: string[];
    to_address: string;
    from_address: string;
}

export interface TraceMessage extends Omit<L2ToL1Message, "from_address"> {
    order: number;
}

export interface TransactionInfo {
    status: TransactionStatus;
    block_hash: string;
    block_number: number;
    transaction_index: number;
    transaction: {
        type: TransactionType;
        transaction_hash: string;
        contract_address: string;
        calldata: string[];
        max_fee: string;
        nonce: string;
        signature: string[];
        version: string;
        entry_point_selector: string;
    };
}

export interface TransactionReceipt {
    transaction_hash: string;
    transaction_index: number;
    block_hash: string;
    block_number: number;
    status: TransactionStatus;
    actual_fee: string;
    events: TransactionEvent[];
    execution_resources: ExecutionResources;
    l2_to_l1_message: L2ToL1Message[];
}

export type CallType = "CALL" | "DELEGATE";

export interface FunctionInvocation {
    call_type: CallType;
    calldata: string[];
    caller_address: string;
    class_hash: string;
    contract_address: string;
    entry_point_type: string;
    events: TraceEvent[];
    execution_resources: ExecutionResources;
    internal_calls: FunctionInvocation[];
    messages: TraceMessage[];
    result: string[];
    selector: string;
}

export interface TransactionTrace {
    fee_transfer_invocation: FunctionInvocation;
    function_invocation: FunctionInvocation;
    signature: string[];
}
