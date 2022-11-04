import styled from "styled-components";

import Navbar from "./Navbar";
import TxInfo from "./TxInfo";
import TxTrace from "./TxTrace";

function TxViewerContainer() {
    // fetch all data here
    // then, store them in their respective context
    return (
        <div>
            <TxViewer />
        </div>
    );
}

const ContentWrapper = styled.div`
    display: flex;
`;

function TxViewer() {
    return (
        <div>
            <Navbar />
            <ContentWrapper>
                <TxInfo />
                <TxTrace />
            </ContentWrapper>
        </div>
    );
}

export default TxViewerContainer;
