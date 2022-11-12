import styled from "styled-components";

import { InfoBox } from "./styled";
import { MonoFont } from "../../../../components/styled";
import {
    DeclareTransactionInfo,
    TransactionReceipt,
} from "../../../../lib/types/transaction";

const Container = styled(InfoBox)``;

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

const Entry = ({
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

interface DeclareInfoProps {
    info: DeclareTransactionInfo;
    receipt: TransactionReceipt;
}

function DeclareInfo({ info, receipt }: DeclareInfoProps) {
    return (
        <>
            <Container>
                <Entry
                    title="Block hash"
                    value={info.block_hash || "PENDING"}
                />
                <Entry
                    title="Block number"
                    value={info.block_number || "PENDING"}
                />
                <Entry title="Index" value={info.transaction_index} />
                <Entry
                    title="Status"
                    value={info.status.replaceAll("_", " ")}
                />
                <Entry title="Nonce" value={info.transaction.nonce || "null"} />
                <Entry title="Class hash" value={info.transaction.class_hash} />
                <Entry
                    title="Sender address"
                    value={info.transaction.sender_address}
                />
                <Entry
                    title="Fee"
                    value={`${receipt.actual_fee} / ${info.transaction.max_fee} ETH`}
                />
                <Entry title="Version" value={info.transaction.version} />
                <Entry title="Timestamp" value="timestamp here" />
            </Container>
        </>
    );
}

export default DeclareInfo;
