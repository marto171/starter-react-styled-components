import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import GlobalStyles from "./styles/GlobalStyles";
import PageNotFound from "./pages/PageNotFound";

import {DarkModeProvider} from "./context/DarkModeContext.jsx";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
          staleTime: 0
        },
    },
});

function App() {
  return <DarkModeProvider>
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster />
    </QueryClientProvider>
  </DarkModeProvider>
}

export default App
