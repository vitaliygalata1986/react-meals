import { useContext } from 'react';
import { FoodContext } from '../context/context';
function RecipeTemplate() {
  const { recipe } = useContext(FoodContext);
  return (
    <>
      <div className="recipe">
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <h1>{recipe.strMeal}</h1>
        <h6>
          <strong>Category:</strong> {recipe.strCategory}
        </h6>
        {recipe.strArea ? (
          <h6>
            <strong>Area:</strong> {recipe.strArea}
          </h6>
        ) : null}
        <p>{recipe.strInstructions}</p>
        <table className="centered">
          <thead>
            <tr>
              <th>Ingredient</th>
              <th>Measure</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(recipe).map((key) => {
              if (key.includes('Ingredient') && recipe[key]) {
                return (
                  <tr key={key}>
                    <td>{recipe[key]}</td>
                    <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                  </tr>
                );
              }
              return null;
            })}
          </tbody>
        </table>

        {recipe.strYoutube ? (
          <div className="row">
            <h5>Video Recipe</h5>
            <iframe
              title={recipe.idMeal}
              src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                -11
              )}`}
              allowFullScreen
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default RecipeTemplate;
