import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../component/Preloader';
import Button from '../component/Button';
import RecipeTemplate from '../component/RecipeTemplate';
import { getMealById } from '../api';
import { FoodContext } from '../context/context';

function Recipe() {
  const { id } = useParams();
  const { recipe, setRecipe } = useContext(FoodContext);

  const getProductById = async () => {
    try {
      const dataFetch = await getMealById(id);
      setRecipe(dataFetch.meals[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductById();
    // eslint-disable-next-line
  }, [id]);

  return (
    <>
      {!recipe.idMeal ? <Preloader /> : <RecipeTemplate />}
      <Button />
    </>
  );
}

export default Recipe;
