import { useContext } from 'react';
import { FoodContext } from '../context/context';
import CategoryItem from './CategoryItem';

function CategoryList() {
  const { filteredCatalog } = useContext(FoodContext);
  if (!filteredCatalog.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="list">
      {filteredCatalog.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
}

export default CategoryList;
