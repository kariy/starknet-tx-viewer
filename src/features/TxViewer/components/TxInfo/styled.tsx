import styled from "styled-components";

export const BoxFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid blueviolet;
`;

export const InfoContainer = styled.div`
    /* display: grid; */
`;

export const InfoBox = styled.div`
    border: 1px solid grey;
    padding: 1.5rem 2rem;
    font-size: 1.1rem;
`;

export const BottomInfo = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    margin-top: 1rem;
    font-family: "Space Mono", monospace;
`;

export const AccordionArrayWrapper = ({
    array,
}: {
    array: string[] | number[];
}) => (
    <div
        style={{
            display: "grid",
            gridTemplateColumns: "max-content 1fr",
            columnGap: "1.3rem",
        }}
    >
        {array.map((e, idx) => (
            <>
                <div
                    style={{
                        color: "grey",
                        fontStyle: "italic",
                        fontSize: "0.95rem",
                    }}
                >
                    {idx}
                </div>
                <div>{e}</div>
            </>
        ))}
    </div>
);

const EntryWrapper = styled.div`
    font-size: 0.9em;
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    margin-bottom: 0.5rem;
`;

const EntryKey = styled.div`
    color: grey;
    font-style: italic;
`;

const EntryValue = styled.div`
    display: flex;
    flex-direction: column;
    font-family: "Space Mono", monospace;
`;

export const Entry = ({
    title,
    value,
}: {
    title: string;
    value: string | string[] | number | number[];
}) => (
    <EntryWrapper>
        <EntryKey>{title}</EntryKey>
        <EntryValue>
            {typeof value == "string" || typeof value == "number" ? (
                <div>{value}</div>
            ) : (
                value.map((e) => <div>{e}</div>)
            )}
        </EntryValue>
    </EntryWrapper>
);
