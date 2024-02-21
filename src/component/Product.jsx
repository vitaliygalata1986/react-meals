import { Link } from 'react-router-dom';

function Product({ idMeal: id, strMeal, strCategory, strMealThumb, strArea }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <span className="card-title">{strMeal.slice(0, 15)}...</span>
        <p>Category: {strCategory}</p>
        <p>Area: {strArea}</p>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export default Product;
