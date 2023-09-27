import { useState, useEffect } from 'react';
import Button from '../component/Button';
import Preloader from '../component/Preloader';
import { getRandomSingleProduct } from '../api';

function Random() {
  const [randomProduct, setRandomProduct] = useState({});
  useEffect(() => {
    getRandomSingleProduct().then((data) => {
      setRandomProduct(data.meals[0]);
    });
  }, []);
  return (
    <>
      {' '}
      {!randomProduct.idMeal ? (
        <Preloader />
      ) : (
        <div className="recipe">
          <img src={randomProduct.strMealThumb} alt={randomProduct.strMeal} />
          <h1>{randomProduct.strMeal}</h1>
          <h6>
            <strong>Category:</strong> {randomProduct.strCategory}
          </h6>
          {randomProduct.strArea ? (
            <h6>
              <strong>Area:</strong> {randomProduct.strArea}
            </h6>
          ) : null}
          <p>{randomProduct.strInstructions}</p>
          <table className="centered">
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(randomProduct).map((key) => {
                if (key.includes('Ingredient') && randomProduct[key]) {
                  // и объект recipe с этим ключем Ingredient не пустой
                  // 13 - от какой позиции мы будем забирать числа
                  return (
                    <tr key={key}>
                      <td>{randomProduct[key]}</td>
                      <td>{randomProduct[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }
                // если это не ингридиент, то мы возращаем что либо
                return null;
              })}
            </tbody>
          </table>
          {randomProduct.strYoutube ? (
            <div className="row">
              <h5>Video Recipe</h5>
              <iframe
                title={randomProduct.idMeal}
                src={`https://www.youtube.com/embed/${randomProduct.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <Button />
    </>
  );
}

export default Random;
