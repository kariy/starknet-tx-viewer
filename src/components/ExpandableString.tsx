import { useState } from "react";
import styled from "styled-components";

// @ts-ignore
import { ReactComponent as ExpandSvg } from "../lib/assets/svgs/Expand.svg";
import { ReactComponent as ShrinkSvg } from "../lib/assets/svgs/Shrink.svg";

const ExpandIcon = styled(ExpandSvg)`
    cursor: pointer;
    color: #989898;
    margin-right: 2px;
`;

const ShrinkIcon = styled(ShrinkSvg)`
    cursor: pointer;
    color: #989898;
    margin-right: 3px;
`;

const ExpandableSpan = styled.span`
    display: inline-flex;
    align-items: center;
`;

interface IExpandableStrProps extends React.HTMLAttributes<HTMLSpanElement> {
    str: string;
}

export function ExpandableStr({ str, ...rest }: IExpandableStrProps) {
    const [open, setOpen] = useState(true);
    return (
        <ExpandableSpan {...rest}>
            {open ? (
                <>
                    <ShrinkIcon title="Shrink" onClick={() => setOpen(false)} />
                    {str}
                </>
            ) : (
                <>
                    <ExpandIcon title="Expand" onClick={() => setOpen(true)} />
                    {"..."}
                </>
            )}
        </ExpandableSpan>
    );
}
