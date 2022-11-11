import { useEffect, useState } from "react";

import {
    InvokeTransactionInfo,
    TransactionReceipt,
    InvokeTransactionTrace,
} from "../../lib/types/transaction";
import { TxContext } from "./context";
import { useStarknet } from "../StarknetProvider";

export const TxProvider: React.FC<{ children: React.ReactNode }> = function ({
    children,
}) {
    const { provider } = useStarknet();

    const [txHash, setTxHash] = useState<string | null>(null);
    const [trace, setTrace] = useState<InvokeTransactionTrace | null>(null);
    const [info, setInfo] = useState<InvokeTransactionInfo | null>(null);
    const [receipt, setReceipt] = useState<TransactionReceipt | null>(null);

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!txHash) return;

        setIsLoading(true);
        Promise.all([
            provider.getTransaction(txHash),
            provider.getTransactionTrace(txHash),
            provider.getTransactionReceipt(txHash),
        ])
            .then((values) => {
                const [info, trace, receipt] = values;

                setInfo(info);
                setTrace(trace);
                setReceipt(receipt);

                setIsError(false);
            })
            .catch(() => setIsError(true))
            .finally(() => setIsLoading(false));
    }, [txHash]);

    return (
        <TxContext.Provider
            value={{
                data: {
                    txInfo: info,
                    txTrace: trace,
                    txReceipt: receipt,
                },
                isError,
                isLoading,
                tx: {
                    hash: txHash,
                    setHash: setTxHash,
                },
            }}
        >
            {children}
        </TxContext.Provider>
    );
};
