import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rebeccapurple;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Form = styled.form`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    height: 3rem;
    width: 90%;
    max-width: 700px;
    min-width: 300px;
    column-gap: 0.7rem;
`;

const ChainSelector = styled.select`
    position: absolute;
    top: -80%;
`;

const SearchInput = styled.input`
    min-width: 300px;
    flex: 3;
`;

const SearchButton = styled.button`
    flex: 1;
    min-width: 100px;
`;

function Home() {
    const navigate = useNavigate();

    const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const chain = e.currentTarget.chainId.value;
        const txHash = e.currentTarget.txHash.value;
        if (chain && txHash) navigate(`/${chain}/${txHash}`);
    };

    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <ChainSelector name="chainId">
                    <option value="alpha-mainnet">Mainnet</option>
                    <option value="alpha-goerli">Testnet 1</option>
                </ChainSelector>

                <SearchInput
                    placeholder="search for a transaction..."
                    name="txHash"
                />
                <SearchButton>view</SearchButton>
            </Form>
        </Container>
    );
}

export default Home;
