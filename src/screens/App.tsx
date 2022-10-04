import React from "react";
import { AuthProvider } from "../hooks/useAuth";
import { Router } from "../navigation";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

const App: React.FC = () => {
  return(
      <AuthProvider>
        <Router />
      </AuthProvider>
  )
}

export default () => {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}