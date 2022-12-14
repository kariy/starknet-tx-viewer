import { useState } from "react";
import styled from "styled-components";

import TraceAccordionHeader from "./Header";
import { EventLog, MessageLog } from "./log";
import { FunctionInvocation } from "../../../../lib/types/transaction";

// @ts-ignore
import { ReactComponent as BarSvg } from "../../../../lib/assets/svgs/Bar.svg";
import { ReactComponent as UpSvg } from "../../../../lib/assets/svgs/ChevronUp.svg";
import { ReactComponent as DownSvg } from "../../../../lib/assets/svgs/ChevronDown.svg";

const Container = styled.div`
    font-family: "Space Mono", monospace;
    font-size: 0.95rem;
    white-space: nowrap;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    width: fit-content;
`;

const UpIcon = styled(UpSvg)`
    cursor: pointer;
    min-width: 18px;
`;

const DownIcon = styled(DownSvg)`
    cursor: pointer;
    min-width: 18px;
`;

const BarIcon = styled(BarSvg)`
    width: 18px;
    color: grey;
`;

const ContentWrapper = styled.div``;

const UpperSection = styled.div`
    font-size: 0.9rem;
    margin-top: 0.5rem;
    margin-left: 3rem;
`;

const BottomSection = styled.div`
    margin-top: 0.5rem;
    margin-left: 2.8rem;
`;

interface ITraceAccordionProps {
    trace: FunctionInvocation;
}

export function TraceAccordion({ trace }: ITraceAccordionProps) {
    const [openBottom, setOpenBottom] = useState(false);

    return (
        <Container>
            <Header>
                {trace.internal_calls.length ? (
                    openBottom ? (
                        <UpIcon onClick={() => setOpenBottom(false)} />
                    ) : (
                        <DownIcon onClick={() => setOpenBottom(true)} />
                    )
                ) : (
                    <BarIcon />
                )}

                <TraceAccordionHeader
                    result={trace.result}
                    selector={trace.selector}
                    calldata={trace.calldata}
                    callType={trace.call_type}
                    contractAddress={trace.contract_address}
                    steps={trace.execution_resources.n_steps}
                />
            </Header>
            <ContentWrapper>
                <UpperSection>
                    {trace.events.map((e) => (
                        <EventLog event={e} />
                    ))}
                    {trace.messages.map((m) => (
                        <MessageLog message={m} />
                    ))}
                </UpperSection>

                {openBottom ? (
                    <BottomSection>
                        {trace.internal_calls.map((e) => (
                            <TraceAccordion trace={e} />
                        ))}
                    </BottomSection>
                ) : null}
            </ContentWrapper>
        </Container>
    );
}
