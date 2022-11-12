import styled from "styled-components";

import { Entry, InfoBox } from "./styled";
import { MonoFont } from "../../../../components/styled";
import {
    DeclareTransactionInfo,
    DeployTransactionInfo,
    TransactionReceipt,
} from "../../../../lib/types/transaction";

const Container = styled(InfoBox)``;

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
`;

interface DeployInfoProps {
    info: DeployTransactionInfo;
}

function DeployInfo({ info }: DeployInfoProps) {
    return (
        <Container>
            <Wrapper>
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
            </Wrapper>

            <Wrapper>
                <Entry title="Class hash" value={info.transaction.class_hash} />
                <Entry
                    title="Contract address"
                    value={info.transaction.contract_address}
                />
            </Wrapper>

            <Wrapper>
                <Entry
                    title="Contract address salt"
                    value={info.transaction.contract_address_salt}
                />
                <Entry title="Version" value={info.transaction.version} />
                <Entry title="Timestamp" value="timestamp here" />
            </Wrapper>
        </Container>
    );
}

export default DeployInfo;
