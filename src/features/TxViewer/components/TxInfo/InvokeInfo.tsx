import styled from "styled-components";

import {
    Entry,
    InfoBox,
    BottomInfo,
    InfoContainer,
    AccordionArrayWrapper,
} from "./styled";
import {
    TransactionReceipt,
    InvokeTransactionInfo,
} from "../../../../lib/types/transaction";
import Accordion from "../../../../components/Accordion";

const Container = styled(InfoContainer)`
    row-gap: 1rem;
`;

const Wrapper = styled.div`
    gap: 2rem;
    display: flex;
`;

interface InvokeInfoProps {
    info: InvokeTransactionInfo;
    receipt: TransactionReceipt;
}

function InvokeInfo({ info, receipt }: InvokeInfoProps) {
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
                    <Entry
                        title="Nonce"
                        value={info.transaction.nonce || "null"}
                    />
                </Wrapper>
                <Wrapper>
                    <Entry
                        title="Contract address"
                        value={info.transaction.contract_address}
                    />
                    <Entry
                        title="Fee"
                        value={`${receipt.actual_fee} / ${info.transaction.max_fee} ETH`}
                    />
                    <Entry title="Version" value={info.transaction.version} />
                    <Entry title="Timestamp" value="timestamp here" />
                </Wrapper>
            </InfoBox>

            <BottomInfo>
                <Accordion
                    title={`Calldata (${info.transaction.calldata.length})`}
                    style={{ flex: 1 }}
                >
                    <AccordionArrayWrapper array={info.transaction.calldata} />
                </Accordion>

                <Accordion
                    title={`Signature (${info.transaction.signature.length})`}
                    style={{ flex: 1 }}
                >
                    <AccordionArrayWrapper array={info.transaction.signature} />
                </Accordion>
            </BottomInfo>
        </Container>
    );
}

export default InvokeInfo;
