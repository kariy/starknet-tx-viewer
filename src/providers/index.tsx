import { StarknetProvider } from "./StarknetProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Provider({ children }: any) {
    return (
        <QueryClientProvider client={queryClient}>
            <StarknetProvider>{children}</StarknetProvider>
        </QueryClientProvider>
    );
}

export default Provider;
