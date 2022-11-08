import React from 'react';
import PagePrincipal from './pages';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from 'styled-components';
import light from './themes/light';
import dark from './themes/dark';

const queryClient = new QueryClient();

function App() {
  const theme = localStorage.getItem('@teste');

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <QueryClientProvider client={queryClient}>
        <PagePrincipal />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
