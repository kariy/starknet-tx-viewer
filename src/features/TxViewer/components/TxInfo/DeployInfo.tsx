import styled from "styled-components";

import { InfoGrid } from "./styled";
import { MonoFont } from "../../../../components/styled";
import {
    DeclareTransactionInfo,
    DeployTransactionInfo,
    TransactionReceipt,
} from "../../../../lib/types/transaction";

const Container = styled(InfoGrid)``;

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

interface DeployInfoProps {
    info: DeployTransactionInfo;
}

function DeployInfo({ info }: DeployInfoProps) {
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
                <Entry title="Status" value={info.status} />

                <Entry title="Class hash" value={info.transaction.class_hash} />
                <Entry
                    title="Contract address"
                    value={info.transaction.contract_address}
                />
                <Entry
                    title="Contract address salt"
                    value={info.transaction.contract_address_salt}
                />
                <Entry title="Version" value={info.transaction.version} />
                <Entry title="Timestamp" value="timestamp here" />
            </Container>
        </>
    );
}

export default DeployInfo;
