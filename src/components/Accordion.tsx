import { useState } from "react";

import { ReactComponent as ChevronUpSvg } from "../lib/assets/svgs/ChevronUp.svg";
import { ReactComponent as ChevronDownSvg } from "../lib/assets/svgs/ChevronDown.svg";
import styled from "styled-components";

const Container = styled.div``;

const HeaderWrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    max-width: max-content;
`;

const ContentWrapper = styled.div`
    padding: 1rem 1.5rem;
`;

const Header = styled.div`
    margin-left: 0.3rem;
    font-family: "Space Mono", monospace;
    font-weight: 600;
`;

const Up = styled(ChevronUpSvg)`
    min-width: 18px;
`;

const Down = styled(ChevronDownSvg)`
    min-width: 18px;
`;

interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    children: React.ReactNode;
}

function Accordion({ title, children, ...rest }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container {...rest}>
            <HeaderWrapper onClick={() => setIsOpen((prev) => !prev)}>
                {isOpen ? <Up /> : <Down />}
                <Header>{title}</Header>
            </HeaderWrapper>
            {isOpen ? <ContentWrapper>{children}</ContentWrapper> : null}
        </Container>
    );
}

export default Accordion;
