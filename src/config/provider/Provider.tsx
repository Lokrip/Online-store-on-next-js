"use client"

import { setupStore } from "@/store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, PropsWithChildren } from "react";
import { Provider } from 'react-redux'

const store = setupStore();
const queryClient = new QueryClient();

const Providers: FC<PropsWithChildren> = ({children}) => {
    return (
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                {children}
                <ReactQueryDevtools initialIsOpen={false}/>
            </QueryClientProvider>
        </Provider>
    )
}   


export default Providers;