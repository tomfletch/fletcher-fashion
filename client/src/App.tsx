import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <main className="container">
          <ProductList />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
