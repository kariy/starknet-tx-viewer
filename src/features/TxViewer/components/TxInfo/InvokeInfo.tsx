import styled from "styled-components";

import { Entry, InfoContainer, InfoBox, BottomInfo } from "./styled";
import {
    InvokeTransactionInfo,
    TransactionReceipt,
} from "../../../../lib/types/transaction";
import { SectionHeaderBaseStyle } from "../styled";

const Container = styled(InfoContainer)`
    row-gap: 1rem;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 2rem;
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
                <div style={{ flex: 1, border: "1px solid blue" }}>
                    <SectionHeaderBaseStyle>Calldata</SectionHeaderBaseStyle>
                    <div>
                        {info.transaction.calldata.map((e) => (
                            <div>{e}</div>
                        ))}
                    </div>
                </div>
                <div style={{ flex: 1, border: "1px solid blue" }}>
                    <SectionHeaderBaseStyle>Signature</SectionHeaderBaseStyle>
                    <div>
                        {info.transaction.signature.map((e) => (
                            <div>{e}</div>
                        ))}
                    </div>
                </div>
            </BottomInfo>
        </Container>
    );
}

export default InvokeInfo;
