import { useContext } from 'react';
import { FoodContext } from '../context/context';
import Product from './Product';

function Products() {
  const { findProductBySearch } = useContext(FoodContext);
  console.log(findProductBySearch);
  if (!findProductBySearch.length) {
    return <h3>No products found</h3>;
  }
  return (
    <>
      <h5>All recipes</h5>
      <div className="list">
        {findProductBySearch.map((item) => (
          <Product key={item.idMeal} {...item} />
        ))}
      </div>
    </>
  );
}

export default Products;
