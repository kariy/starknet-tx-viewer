import { useState } from "react";
import styled from "styled-components";

import { TxInfo } from "./Info";
import { SectionHeaderBaseStyle } from "../styled";
import { useTxInfo, useTxReceipt } from "../../../../providers/TxProvider";

const Container = styled.div<{ isOpen: boolean }>`
    overflow-y: scroll;
    border: 1px solid gray;
    flex: 1;
    width: ${({ isOpen }) => (isOpen ? "580px" : "0px")};
    ${({ isOpen }) => (!isOpen ? "padding: unset;" : "")}
`;

const DoorHandle = styled.button<{ isOpen: boolean }>`
    position: absolute;
    right: ${({ isOpen }) => (isOpen ? 0 : "-100px")};
    z-index: 100;
    top: 0;
`;

function TxInfoContainer() {
    const info = useTxInfo();
    const receipt = useTxReceipt();

    const [open, setOpen] = useState(true);
    // do all decode stuff here

    const handleSectionOpen = () => setOpen((prev) => !prev);

    return (
        <Container isOpen={open}>
            <DoorHandle isOpen={open} onClick={handleSectionOpen}>
                close
            </DoorHandle>

            <SectionHeaderBaseStyle>Transaction Info</SectionHeaderBaseStyle>

            {info && receipt ? <TxInfo info={info} receipt={receipt} /> : null}
        </Container>
    );
}

export default TxInfoContainer;
