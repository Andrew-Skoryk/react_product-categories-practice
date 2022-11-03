import { FC, useState } from 'react';
import './App.scss';

import productsFromServer from './api/products';
import { Product } from './types/Products';
import { ProductList } from './components/ProductsList';
import { ProductsFilter } from './components/ProducsFilter';

export const App: FC = () => {
  const [products] = useState<Product[]>(productsFromServer);

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <ProductsFilter />

        <div className="box table-container">
          {!products.length ? (
            <p data-cy="NoMatchingMessage">
              No products matching selected criteria
            </p>
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    </div>
  );
};
