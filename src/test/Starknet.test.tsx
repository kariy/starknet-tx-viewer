import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { SequencerProvider } from "starknet";

// import { Provider } from "../lib/starknet";

// test("renders learn react link", () => {
//     render(<App />);
//     const linkElement = screen.getByText(/learn react/i);
//     expect(linkElement).toBeInTheDocument();
// });

test("fetch many data", async () => {
    let p = new SequencerProvider({
        network: "goerli-alpha",
    });

    let values = await Promise.all([
        p.getTransaction(
            "0x0716d4e9df6e3a5646ffebe5713ef081412bb58787d56769e7c500ce4e5cca30"
        ),
        p.getTransactionReceipt(
            "0x0716d4e9df6e3a5646ffebe5713ef081412bb58787d56769e7c500ce4e5cca30"
        ),
        p.getCode(
            "0x05131a9a5dd8f44505f8ce8760b8f076b5732cec3accdee5f17dbf70a300f1bf"
        ),
        p.getCode(
            "0x05131a9a5dd8f44505f8ce8760b8f076b5732cec3accdee5f17dbf70a300f1bf"
        ),
        p.getCode(
            "0x05131a9a5dd8f44505f8ce8760b8f076b5732cec3accdee5f17dbf70a300f1bf"
        ),
        p.getCode(
            "0x05131a9a5dd8f44505f8ce8760b8f076b5732cec3accdee5f17dbf70a300f1bf"
        ),
    ]);

    values.forEach((value) => console.log(value));
});
