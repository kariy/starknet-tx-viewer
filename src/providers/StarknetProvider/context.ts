import axios from "axios";

import { createContext, useContext, useMemo } from "react";
import { Chain } from "../../lib/types/starknet";
import {
    InvokeTransactionInfo,
    TransactionReceipt,
    TransactionTrace,
} from "../../lib/types/transaction";
import { getSequencerEndpoint } from "../../lib/utils";

export class Starknet {
    private url: string;

    constructor(chain: Chain) {
        this.url = getSequencerEndpoint(chain);
    }

    async getTransaction(hash: string) {
        return (
            await axios.get<InvokeTransactionInfo>(
                `${this.url}/get_transaction?transactionHash=${hash}`
            )
        ).data;
    }

    async getTransactionTrace(hash: string) {
        return (
            await axios.get<TransactionTrace>(
                `${this.url}/get_transaction_trace?transactionHash=${hash}`
            )
        ).data;
    }

    async getTransactionReceipt(hash: string) {
        return (
            await axios.get<TransactionReceipt>(
                `${this.url}/get_transaction_receipt?transactionHash=${hash}`
            )
        ).data;
    }
}

export interface IStarknetContext {
    chain: Chain;
    provider: Starknet;
    setChain: (chain: Chain) => void;
}

export const StarknetContext = createContext<IStarknetContext>({
    chain: "MAINNET",
    provider: new Starknet("MAINNET"),
    setChain: () => {},
});

export const useStarknet = function () {
    return useContext(StarknetContext);
};
