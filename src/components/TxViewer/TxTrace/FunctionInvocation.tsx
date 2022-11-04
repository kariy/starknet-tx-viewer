import { useMemo } from "react";
import styled from "styled-components";

import { SectionHeaderBaseStyle } from "../styled";
import { TraceAccordion } from "../../TraceAccordion";
import { useTxTrace } from "../../../providers/TxProvider";
import { FunctionInvocation } from "../../../lib/types/transaction";

// @ts-ignore
import { ReactComponent as ClipboardSvg } from "../../../lib/assets/svgs/Clipboard.svg";

const CopyIcon = styled(ClipboardSvg)`
    cursor: pointer;
    display: inline;
    margin-left: 1rem;
`;

const Container = styled.div`
    margin-bottom: 2rem;
`;

const Header = styled(SectionHeaderBaseStyle)``;

function FunctionTraceContainer() {
    const data = useTxTrace();

    const handleCopy = useMemo(
        () => () => {
            if (data?.function_invocation)
                navigator.clipboard.writeText(
                    JSON.stringify(data.function_invocation)
                );
        },
        [data]
    );

    return (
        <Container>
            <Header>
                Function Invocation
                <CopyIcon onClick={handleCopy} title="copy raw json" />
            </Header>
            {data ? (
                <FunctionTrace functionInvocation={data.function_invocation} />
            ) : null}
        </Container>
    );
}

interface IFunctionTraceProps {
    functionInvocation: FunctionInvocation;
}

function FunctionTrace({ functionInvocation }: IFunctionTraceProps) {
    return (
        <>
            <TraceAccordion trace={functionInvocation} />
        </>
    );
}

export default FunctionTraceContainer;
