import Meal from '../component/Meal';

function MealList({ meals }) {
  return (
    <div className="list">
      {meals.map((item) => (
        <Meal key={item.idMeal} {...item} />
      ))}
    </div>
  );
}

export { MealList };
