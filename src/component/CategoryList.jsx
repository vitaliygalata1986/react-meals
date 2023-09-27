import CategoryItem from './CategoryItem';

function CategoryList({ catalog = [] }) {
  if (!catalog.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="list">
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
}

export default CategoryList;
