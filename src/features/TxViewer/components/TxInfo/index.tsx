import { useState } from "react";
import styled from "styled-components";

import InvokeInfo from "./InvokeInfo";
import DeployInfo from "./DeployInfo";
import DeclareInfo from "./DeclareInfo";
import { SectionHeaderBaseStyle } from "../styled";
import { useTxInfo, useTxReceipt } from "../../../../providers/TxProvider";
import {
    DeclareTransactionInfo,
    DeployTransactionInfo,
    InvokeTransactionInfo,
    L1HandlerTransactionInfo,
} from "../../../../lib/types/transaction";
import L1HandlerInfo from "./L1HandlerInfo";

const Container = styled.div`
    overflow-y: scroll;
    border: 1px solid gray;
    flex: 1;
`;

const Wrapper = styled.div``;

const InfoBox = styled.div``;

function TxInfoContainer() {
    const info = useTxInfo();
    const receipt = useTxReceipt();

    return (
        <Container>
            <Wrapper>
                <SectionHeaderBaseStyle>
                    TYPE: {info ? info.transaction.type : null}
                </SectionHeaderBaseStyle>
                <InfoBox>
                    {info && receipt ? (
                        info.transaction.type === "INVOKE_FUNCTION" ? (
                            <InvokeInfo
                                info={info as InvokeTransactionInfo}
                                receipt={receipt}
                            />
                        ) : info.transaction.type === "DECLARE" ? (
                            <DeclareInfo
                                info={info as DeclareTransactionInfo}
                                receipt={receipt}
                            />
                        ) : info.transaction.type === "DEPLOY" ? (
                            <DeployInfo info={info as DeployTransactionInfo} />
                        ) : info.transaction.type === "L1_HANDLER" ? (
                            <L1HandlerInfo
                                info={info as L1HandlerTransactionInfo}
                                receipt={receipt}
                            />
                        ) : null
                    ) : null}
                </InfoBox>
            </Wrapper>
            <Wrapper>{/* put calldata here */}</Wrapper>
        </Container>
    );
}

export default TxInfoContainer;
