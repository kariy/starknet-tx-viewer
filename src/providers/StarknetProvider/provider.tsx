import React, { useMemo, useState } from "react";

import { Chain } from "../../lib/types/starknet";
import { Starknet, StarknetContext } from "./context";

export const StarknetProvider: React.FC<{ children: React.ReactNode }> =
    function ({ children }) {
        const [chain, setChain] = useState<Chain>("MAINNET");
        const provider = useMemo(() => new Starknet(chain), [chain]);

        return (
            <StarknetContext.Provider
                value={{
                    chain,
                    provider,
                    setChain,
                }}
            >
                {children}
            </StarknetContext.Provider>
        );
    };

export default StarknetProvider;
