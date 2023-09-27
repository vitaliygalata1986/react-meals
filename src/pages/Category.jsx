import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MealList from '../component/MealList';
import Preloader from '../component/Preloader';
import Button from '../component/Button';
import { getFilteredCategory } from '../api';

function Category() {
  const name = useParams(); // будем вынимать неком имя
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    getFilteredCategory(name).then((data) => {
      data.meals && setMeals(data.meals);
    });
  }, [name]);

  return (
    <>
      <Button />
      {!meals.length ? <Preloader /> : <MealList meals={meals} />}
    </>
  );
}

export default Category;
