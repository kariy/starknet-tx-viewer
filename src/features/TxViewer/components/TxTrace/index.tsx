import styled from "styled-components";

import FeeTransfer from "./FeeTransfer";
import FunctionTrace from "./FunctionInvocation";
import { useTxInfo, useTxTrace } from "../../../../providers/TxProvider";

const Container = styled.div`
    /* border: 1px solid green; */
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    width: max-content;
    padding-right: 3rem;
    padding-bottom: 1rem;
`;

function TxTrace() {
    const info = useTxInfo();
    const trace = useTxTrace();

    return (
        <Container>
            <Wrapper>
                {trace ? (
                    <>
                        <FunctionTrace
                            data={
                                //@ts-ignore
                                trace.validate_invocation ||
                                //@ts-ignore
                                trace.function_invocation
                            }
                        />
                        <FeeTransfer data={trace.fee_transfer_invocation} />
                    </>
                ) : null}
            </Wrapper>
        </Container>
    );
}

export default TxTrace;
