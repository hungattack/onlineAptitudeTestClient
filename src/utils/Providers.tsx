'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Provider } from 'react-redux'
import { store, persistor } from '../redux/configStore'
import { PersistGate } from 'redux-persist/integration/react'
export default function Providers({ children }: React.PropsWithChildren) {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    {children}
                    <ReactQueryDevtools initialIsOpen={false} />
                </PersistGate>
            </Provider>
        </QueryClientProvider>
    )
}
