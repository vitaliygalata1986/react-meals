import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { MealList } from '../component/MealList';
import { Preloader } from '../component/Preloader';
function Category() {
  const name = useParams(); // будем вынимать неком имя
  const [meals, setMeals] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      data.meals && setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <button className="btn" onClick={() => navigate(-1)}>
        Go Back
      </button>
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export { Category };
