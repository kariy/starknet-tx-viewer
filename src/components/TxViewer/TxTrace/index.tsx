import styled from "styled-components";

import FeeTransfer from "./FeeTransfer";
import FunctionTrace from "./FunctionInvocation";

const Container = styled.div`
    border: 1px solid green;
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    width: max-content;
    padding: 1.5rem;
`;

function TxTrace() {
    return (
        <Container>
            <Wrapper>
                <FunctionTrace />
                <FeeTransfer />
            </Wrapper>
        </Container>
    );
}

export default TxTrace;
