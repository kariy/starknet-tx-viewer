import styled from "styled-components";

import { Chain } from "../../../lib/types/starknet";
import { useTransaction } from "../../../providers/TxProvider";
import { useStarknet } from "../../../providers/StarknetProvider";
import { useEffect, useRef } from "react";

const Container = styled.nav`
    height: 60px;
    border: 1px solid blue;
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.div`
    border: 1px solid red;
    min-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SearchForm = styled.form`
    border: 1px solid seashell;
    /* min-width: min-content; */
    min-width: 400px;
    display: flex;
    align-items: center;
`;

const SearchInput = styled.input`
    flex: 1;
`;

const SearchButton = styled.button`
    flex: 1;
`;

const ChainSelector = styled.select``;

function Navbar() {
    const { tx } = useTransaction();
    const { chain, setChain } = useStarknet();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleChainChange: React.ChangeEventHandler<HTMLSelectElement> = (
        e
    ) => setChain(e.currentTarget.value as Chain);

    useEffect(() => {
        if (inputRef.current && tx.hash) inputRef.current.value = tx.hash;
    }, [inputRef.current]);

    return (
        <Container>
            <Logo>
                <div>starknet teleskop</div>
            </Logo>
            <SearchForm>
                <SearchInput placeholder="view a tx..." ref={inputRef} />

                <SearchButton>view</SearchButton>

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
