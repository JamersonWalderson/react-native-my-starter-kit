import React from "react";
import { AuthProvider } from "../hooks/useAuth";
import { Router } from "../navigation";
import { Provider as PaperProvider } from 'react-native-paper';
import { QueryClient, QueryClientProvider } from "react-query";
import {ThemeProvider} from 'styled-components';
import { theme } from "../global/styles/theme";

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
      <ThemeProvider theme={theme}>
        <PaperProvider>
            <App />
        </PaperProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}