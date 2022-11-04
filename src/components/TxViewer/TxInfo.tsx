import styled from "styled-components";

const Container = styled.div`
    border: 1px solid yellow;
    flex: 1;
`;

function TxInfoContainer() {
    return (
        <Container>
            <TxInfo />
        </Container>
    );
}

function TxInfo() {
    return <>tx info here</>;
}

export default TxInfoContainer;
