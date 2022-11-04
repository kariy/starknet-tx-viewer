import { useEffect, useMemo, useState } from "react";
import { SequencerProvider, SequencerProviderOptions } from "starknet";
import { StarknetContext } from "./context";

export function StarknetProvider({ children }: any) {
    const [config, setConfig] = useState<SequencerProviderOptions>({
        network: "mainnet-alpha",
    });
    const provider = useMemo(() => new SequencerProvider(config), [config]);

    return (
        <StarknetContext.Provider
            value={{
                provider,
                setup: setConfig,
            }}
        >
            {children}
        </StarknetContext.Provider>
    );
}
