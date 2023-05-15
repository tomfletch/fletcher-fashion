import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCardContext';

const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(200, 95%, 30%)',
    },
    secondary: {
      main: 'hsl(32, 100%, 49%)',
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <ThemeProvider theme={theme}>
          <div className="App">
            <Header />
            <main className="container">
              <Outlet />
            </main>
          </div>
        </ThemeProvider>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}

export default App;
