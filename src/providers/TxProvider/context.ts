import { createContext, useContext } from "react";

import {
    DeclareTransactionInfo,
    DeployTransactionInfo,
    InvokeTransactionInfo,
    L1HandlerTransactionInfo,
    TransactionReceipt,
    InvokeTransactionTrace,
    DeclareTransactionTrace,
} from "../../lib/types/transaction";

export interface ITxContext {
    data: {
        txInfo:
            | InvokeTransactionInfo
            | DeclareTransactionInfo
            | DeployTransactionInfo
            | L1HandlerTransactionInfo
            | null;
        txTrace: InvokeTransactionTrace | DeclareTransactionTrace | null;
        txReceipt: TransactionReceipt | null;
    };
    isError: boolean;
    isLoading: boolean;
    tx: {
        hash: string | null;
        setHash: (hash: string | null) => void;
    };
}

export const TxContext = createContext<ITxContext>({
    data: {
        txInfo: null,
        txTrace: null,
        txReceipt: null,
    },
    isError: false,
    isLoading: false,
    tx: {
        hash: null,
        setHash: () => {},
    },
});

export const useTransaction = function () {
    return useContext(TxContext);
};

export const useTxInfo = function () {
    return useContext(TxContext).data.txInfo;
};

export const useTxTrace = function () {
    return useContext(TxContext).data.txTrace;
};

export const useTxReceipt = function () {
    return useContext(TxContext).data.txReceipt;
};
