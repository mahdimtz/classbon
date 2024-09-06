'use client';

import { queryClient } from "@/library/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function QueryProvider({children}:React.PropsWithChildren){
    return(
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />

            
        </QueryClientProvider>
    )

}
export default QueryProvider;