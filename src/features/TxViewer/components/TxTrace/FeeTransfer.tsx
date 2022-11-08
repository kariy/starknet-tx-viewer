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

function FeeTransferContainer() {
    const data = useTxTrace();

    const handleCopy = useMemo(
        () => () => {
            if (data?.fee_transfer_invocation)
                navigator.clipboard.writeText(
                    JSON.stringify(data.fee_transfer_invocation)
                );
        },
        [data]
    );

    return (
        <Container>
            <Header>
                Fee Transfer
                <CopyIcon onClick={handleCopy} title="copy raw json" />
            </Header>

            {data ? (
                <FeeTransfer feeTransfer={data.fee_transfer_invocation} />
            ) : null}
        </Container>
    );
}

const Wrapper = styled.div``;

interface IFeeTransferProps {
    feeTransfer: FunctionInvocation;
}

function FeeTransfer({ feeTransfer }: IFeeTransferProps) {
    return (
        <Wrapper>
            <TraceAccordion trace={feeTransfer} />
        </Wrapper>
    );
}

export default FeeTransferContainer;
