import styled from "styled-components";

import { ExpandablStrList } from "./Header";
import { truncateString } from "../../../../lib/utils";
import CopyableText from "../../../../components/CopyableText";
import { TraceEvent, TraceMessage } from "../../../../lib/types/transaction";

const Container = styled.div`
    display: flex;
    align-items: center;
    color: #7b7b7b;
`;

const LogType = styled.span`
    font-style: italic;
`;

interface IEventLogProps {
    event: TraceEvent;
}

export function EventLog({ event }: IEventLogProps) {
    return (
        <Container>
            [<LogType style={{ color: "#E26D00" }}>event</LogType>]
            <span title="event order">[{event.order}]</span>
            [<ExpandablStrList arr={event.keys} title="event keys" />] [
            <ExpandablStrList arr={event.data} title="event data" />]
        </Container>
    );
}

interface IMessageLogProps {
    message: TraceMessage;
}

export function MessageLog({ message }: IMessageLogProps) {
    return (
        <Container>
            [<LogType style={{ color: "#76AD02" }}>message</LogType>]
            <span title="message order">[{message.order}]</span>
            [
            <CopyableText
                title="message recipient"
                copyValue={message.to_address}
                displayValue={truncateString(message.to_address)}
            />
            ] [
            <ExpandablStrList title="message payload" arr={message.payload} />]
        </Container>
    );
}
