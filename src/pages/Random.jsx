import { useContext, useEffect } from 'react';
import RecipeTemplate from '../component/RecipeTemplate';
import Button from '../component/Button';
import Preloader from '../component/Preloader';
import { getRandomMealProduct } from '../api';
import { FoodContext } from '../context/context';

function Random() {
  const { recipe, setRandomProduct } = useContext(FoodContext);

  const getRandomProduct = async () => {
    try {
      const dataFetch = await getRandomMealProduct();
      setRandomProduct(dataFetch.meals[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getRandomProduct();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {!recipe.idMeal ? <Preloader /> : <RecipeTemplate />}
      <Button />
    </>
  );
}

export default Random;
