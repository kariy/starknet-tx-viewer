import styled from "styled-components";

const Container = styled.div`
    border: 1px solid green;
    flex: 1;
`;

function TxTraceContainer() {
    return (
        <Container>
            <TxTrace />
        </Container>
    );
}

function TxTrace() {
    return <>tx trace here</>;
}

export default TxTraceContainer;
