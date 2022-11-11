import { useState } from "react";
import styled from "styled-components";

import { truncateString } from "../../../../lib/utils";
import { CallType } from "../../../../lib/types/transaction";
import CopyableText from "../../../../components/CopyableText";
import { ExpandableStr } from "../../../../components/ExpandableString";

interface IExpandableStrListProps
    extends React.HTMLAttributes<HTMLSpanElement> {
    arr: string[];
}

export function ExpandablStrList({ arr, ...rest }: IExpandableStrListProps) {
    const [text] = useState<string | null>(() =>
        arr.length ? arr.map((v, i) => (i ? `, ${v}` : v)).join("") : null
    );
    return <>{!text ? " " : <ExpandableStr str={text} {...rest} />}</>;
}

const AccordionHeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

interface ITraceAccordionHeaderProps {
    steps: number;
    callType: CallType;
    selector: string;
    result: string[];
    calldata: string[];
    contractAddress: string;
}

function TraceAccordionHeader({
    steps,
    result,
    selector,
    callType,
    calldata,
    contractAddress,
}: ITraceAccordionHeaderProps) {
    return (
        <AccordionHeaderContainer>
            [
            <span
                title="call type"
                style={{
                    color: callType == "CALL" ? "#e2447e" : "#3279e3",
                    fontWeight: 600,
                }}
            >
                {callType}
            </span>
            ]<span title="number of steps">[{steps}]</span>
            [
            <CopyableText
                title="contract address"
                copyValue={contractAddress}
                displayValue={truncateString(contractAddress)}
            />
            ] [
            <CopyableText
                title="selector"
                copyValue={selector}
                displayValue={truncateString(selector)}
            />
            ] (<ExpandablStrList title="calldata" arr={calldata} />)
            <span style={{ margin: "0 8px" }}>-&gt;</span>
            (<ExpandablStrList title="results" arr={result} />)
        </AccordionHeaderContainer>
    );
}

export default TraceAccordionHeader;
