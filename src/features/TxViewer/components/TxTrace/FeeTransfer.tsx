import { useMemo } from "react";
import styled from "styled-components";

import { TraceAccordion } from "../TraceAccordion";
import { SectionHeaderBaseStyle } from "../styled";
import { useTxTrace } from "../../../../providers/TxProvider";
import { FunctionInvocation } from "../../../../lib/types/transaction";

// @ts-ignore
import { ReactComponent as ClipboardSvg } from "../../../../lib/assets/svgs/Clipboard.svg";

const CopyIcon = styled(ClipboardSvg)`
    cursor: pointer;
    display: inline;
    margin-left: 1rem;
`;

const Container = styled.div`
    margin-bottom: 2rem;
`;

const Header = styled(SectionHeaderBaseStyle)``;

interface FeeTransferProps {
    data?: FunctionInvocation;
}

function FeeTransfer({ data }: FeeTransferProps) {
    const handleCopy = useMemo(
        () => () => {
            if (data) navigator.clipboard.writeText(JSON.stringify(data));
        },
        [data]
    );

    return (
        <Container>
            <Header>
                Fee Transfer
                {data ? (
                    <CopyIcon onClick={handleCopy} title="copy raw json" />
                ) : null}
            </Header>

            {data ? <TraceAccordion trace={data} /> : null}
        </Container>
    );
}

export default FeeTransfer;
