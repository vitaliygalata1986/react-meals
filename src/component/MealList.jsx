import { useContext } from 'react';
import { FoodContext } from '../context/context';
import Meal from '../component/Meal';

function MealList() {
  const { mealsByCatalog } = useContext(FoodContext);
  if (!mealsByCatalog.length) {
    return <h3>Nothing here</h3>;
  }
  return (
    <div className="list">
      {mealsByCatalog.map((item) => (
        <Meal key={item.idMeal} {...item} />
      ))}
    </div>
  );
}

export default MealList;
