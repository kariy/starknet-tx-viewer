import styled from "styled-components";

import { AccordionArrayWrapper } from "./styled";
import { BottomInfo, Entry, InfoBox, InfoContainer } from "./styled";
import Accordion from "../../../../components/Accordion";
import { DeployTransactionInfo } from "../../../../lib/types/transaction";

const Container = styled(InfoContainer)``;

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
            <InfoBox>
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
                    <Entry
                        title="Class hash"
                        value={info.transaction.class_hash}
                    />
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
            </InfoBox>

            <BottomInfo>
                <Accordion
                    title={`Constructor calldata (${info.transaction.constructor_calldata.length})`}
                    style={{ flex: 1 }}
                >
                    <AccordionArrayWrapper
                        array={info.transaction.constructor_calldata}
                    />
                </Accordion>
            </BottomInfo>
        </Container>
    );
}

export default DeployInfo;
