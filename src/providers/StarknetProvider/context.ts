import { createContext, useContext } from "react";
import { SequencerProvider, SequencerProviderOptions } from "starknet";

export interface TStarknetContext {
    provider: SequencerProvider;
    setup: (opts: SequencerProviderOptions) => void;
}

export const StarknetContext = createContext<TStarknetContext>({
    provider: new SequencerProvider(),
    setup: () => {},
});

export const useStarknetProvider = function () {
    return useContext(StarknetContext);
};
