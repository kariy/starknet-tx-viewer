import { useMemo } from "react";
import styled from "styled-components";

// @ts-ignore
import { ReactComponent as ClipboardSvg } from "../lib/assets/svgs/Clipboard.svg";

const Span = styled.span`
    display: inline-flex;
    align-items: center;
`;

const ClipboardIcon = styled(ClipboardSvg)`
    cursor: pointer;
    color: #989898;
    margin-left: 0.4rem;
    margin-right: 0.2rem;
`;

interface ICopyableTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    copyValue: string;
    displayValue: string;
}

function CopyableText({
    copyValue,
    displayValue,
    ...rest
}: ICopyableTextProps) {
    const handleClick = useMemo(
        () => () => navigator.clipboard.writeText(copyValue),
        [copyValue]
    );

    return (
        <Span {...rest}>
            {displayValue}
            <ClipboardIcon onClick={handleClick} title="Copy" />
        </Span>
    );
}

export default CopyableText;
