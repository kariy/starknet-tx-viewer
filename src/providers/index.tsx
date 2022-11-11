import { TxProvider } from "./TxProvider";
import { StarknetProvider } from "./StarknetProvider";

function Provider({ children }: any) {
    return (
        <StarknetProvider>
            <TxProvider>{children}</TxProvider>
        </StarknetProvider>
    );
}

export default Provider;
