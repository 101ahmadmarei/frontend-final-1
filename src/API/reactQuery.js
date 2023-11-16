import { QueryClient } from "react-query";


// Create a client
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 0
        },
        mutations: {

        }
    }
})
