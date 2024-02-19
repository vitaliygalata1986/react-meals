import { Link } from 'react-router-dom';

function Meal({ strMeal, strMealThumb, idMeal: id }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="card-content">
        <p>{strMeal.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/meal/${id}`} className="btn">
          Watch recipe
        </Link>
      </div>
    </div>
  );
}

export default Meal;
