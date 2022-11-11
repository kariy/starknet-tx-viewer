import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Chain } from "../../../lib/types/starknet";
import { useTransaction } from "../../../providers/TxProvider";
import { useStarknet } from "../../../providers/StarknetProvider";
import { ReactComponent as SearchIconSvg } from "../../../lib/assets/svgs/SearchIcon.svg";

const Container = styled.nav`
    height: 70px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: white;
    padding-left: 2rem;
    padding-right: 2rem;
    background-color: #2e2e2e;
    justify-content: space-between;
    font-family: "Space Mono", monospace;
`;

const Logo = styled.div`
    cursor: pointer;
    min-width: 200px;
    font-weight: 600;
    font-size: 1.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        text-decoration: underline;
    }
`;

const SearchForm = styled.form`
    display: flex;
    flex: 1;
    color: black;
    height: 35px;
    max-width: 700px;
`;

const SearchInput = styled.input`
    flex: 1;
    border: none;
    font-size: 0.9rem;
    padding: 0.55rem 0.8rem;

    &:focus-visible {
        outline: none;
    }
`;

const SearchIcon = styled(SearchIconSvg)`
    &:hover {
        color: grey;
    }
`;

const SearchButton = styled.button`
    border: unset;
    display: flex;
    align-items: center;
    padding-left: 0.8rem;
    padding-right: 0.7rem;
    background-color: unset;
`;

const InputWrapper = styled.div`
    flex: 1;
    display: flex;
    height: 35px;
    margin-right: 0.7rem;
    background-color: white;
`;

const ChainSelector = styled.select`
    width: 100px;
    border: unset;
    text-align: center;
    border-radius: unset;
    background-color: white;
`;

function Navbar() {
    const navigate = useNavigate();
    const { tx } = useTransaction();
    const { chain, setChain } = useStarknet();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChainChange: React.ChangeEventHandler<HTMLSelectElement> = (
        e
    ) => setChain(e.currentTarget.value as Chain);

    useEffect(() => {
        if (inputRef.current && tx.hash) inputRef.current.value = tx.hash;
    }, [inputRef.current]);

    const handleTxSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const chain = e.currentTarget.chainId.value;
        const txHash = e.currentTarget.txHash.value;
        if (chain && txHash)
            navigate(`/${(chain as string).toLowerCase()}/${txHash}`);
    };

    return (
        <Container>
            <Logo onClick={() => navigate("/")}>
                <div>🔭 starknet tx viewer</div>
            </Logo>
            <SearchForm onSubmit={handleTxSubmit}>
                <InputWrapper>
                    <SearchInput
                        name="txHash"
                        ref={inputRef}
                        placeholder="view a tx..."
                    />

                    <SearchButton>
                        <SearchIcon />
                    </SearchButton>
                </InputWrapper>

                <ChainSelector
                    name="chainId"
                    onChange={handleChainChange}
                    value={chain}
                >
                    <option value="MAINNET">mainnet</option>
                    <option value="GOERLI">goerli</option>
                    <option value="GOERLI2">goerli 2</option>
                </ChainSelector>
            </SearchForm>
        </Container>
    );
}

export default Navbar;
