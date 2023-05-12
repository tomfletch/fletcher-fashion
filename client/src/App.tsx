import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ShoppingCartProvider } from './context/ShoppingCardContext';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <div className="App">
          <Header />
          <main className="container">
            <Outlet />
          </main>
        </div>
      </ShoppingCartProvider>
    </QueryClientProvider>
  );
}

export default App;
