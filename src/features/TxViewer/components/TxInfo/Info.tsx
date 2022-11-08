import styled from "styled-components";

import {
    DeclareTransactionInfo,
    DeployTransactionInfo,
    InvokeTransactionInfo,
    L1HandlerTransactionInfo,
    TransactionReceipt,
} from "../../../../lib/types/transaction";
import { MonoFont } from "../../../../components/styled";

const ContentContainer = styled.div``;

const EntryWrapper = styled.div`
    font-size: 0.95rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    margin-bottom: 0.5rem;
`;

const EntryKey = styled.div`
    color: grey;
    font-style: italic;
`;

const EntryValue = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoEntry = ({
    title,
    value,
}: {
    title: string;
    value: string | string[] | number | number[];
}) => (
    <EntryWrapper>
        <EntryKey>{title}</EntryKey>
        <EntryValue>
            {typeof value == "string" || typeof value == "number" ? (
                <MonoFont>{value}</MonoFont>
            ) : (
                value.map((e) => <MonoFont>{e}</MonoFont>)
            )}
        </EntryValue>
    </EntryWrapper>
);

interface TxInfoProps {
    info:
        | InvokeTransactionInfo
        | DeclareTransactionInfo
        | DeployTransactionInfo
        | L1HandlerTransactionInfo;

    receipt: TransactionReceipt;
}

export function TxInfo({ info, receipt }: TxInfoProps) {
    return (
        <ContentContainer>
            <InfoEntry title="Type" value={info.transaction.type} />

            <InfoEntry
                title="Transaction hash"
                value={info.transaction.transaction_hash}
            />

            <InfoEntry title="Block hash" value={info.block_hash} />

            <InfoEntry title="Block number" value={info.block_number} />

            <InfoEntry title="Status" value={info.status} />

            <InfoEntry
                title="Transaction index"
                value={info.transaction_index}
            />

            {/* <InfoEntry
                title="Contract address"
                value={info.transaction.contract_address}
            />

            <InfoEntry
                title="Entry point selector"
                value={info.transaction.entry_point_selector}
            />

            <InfoEntry title="Calldata" value={info.transaction.calldata} />

            <InfoEntry title="Signature" value={info.transaction.signature} />

            <InfoEntry title="Max fee" value={info.transaction.max_fee} />

            <InfoEntry title="Class hash" value={info.transaction.class} /> */}

            <InfoEntry title="Actual fee" value={receipt.actual_fee} />

            <InfoEntry title="Version" value={info.transaction.version} />
        </ContentContainer>
    );
}
