import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { Chain } from "../../lib/types/starknet";
import { useTransaction } from "../../providers/TxProvider";
import { useStarknet } from "../../providers/StarknetProvider";

import TxInfo from "./components/TxInfo";
import Navbar from "./components/Navbar";
import TxTrace from "./components/TxTrace";
import TxExecutionResources from "./components/TxResources";

function TxViewerContainer() {
    const params = useParams();
    const { tx } = useTransaction();
    const { setChain } = useStarknet();

    useEffect(() => {
        const { chainId, txHash } = params;

        if (!chainId && !txHash) return;

        setChain((chainId as string).toUpperCase() as Chain);
        tx.setHash(txHash || null);
    }, [params]);

    return <TxViewer />;
}

const Container = styled.div``;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 2rem;
`;

function TxViewer() {
    return (
        <Container>
            <Navbar />
            <ContentWrapper>
                <TxInfo />
                <div
                    style={{
                        border: "1px solid black",
                        height: "0px",
                        margin: "0.7rem 0",
                    }}
                ></div>
                <TxTrace />
                <TxExecutionResources />
            </ContentWrapper>
        </Container>
    );
}

export default TxViewerContainer;
