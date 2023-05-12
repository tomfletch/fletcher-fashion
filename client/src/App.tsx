import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import ListTypeSelector from './components/ListTypeSelector/ListTypeSelector';
import styles from './App.module.css';

const queryClient = new QueryClient();

function App() {
  const [listType, setListType] = useState<'row' | 'grid'>('grid');

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Header />
        <main className="container">
          <div className={styles.listTypeSelectorContainer}>
            <ListTypeSelector listType={listType} setListType={setListType} />
          </div>
          <ProductList listType={listType} />
        </main>
      </div>
    </QueryClientProvider>
  );
}

export default App;
