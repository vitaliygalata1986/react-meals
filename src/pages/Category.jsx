import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MealList from '../component/MealList';
import Preloader from '../component/Preloader';
import Button from '../component/Button';
import { getAllMealsByCatalog } from '../api';
import { FoodContext } from '../context/context';

function Category() {
  const name = useParams();
  const { loading, setMealsByCatalog } = useContext(FoodContext);

  const getMealsByCatalog = async () => {
    try {
      const dataFetch = await getAllMealsByCatalog(name);
      setMealsByCatalog(dataFetch?.meals ?? []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMealsByCatalog();
    // eslint-disable-next-line
  }, [name]);

  return (
    <>
      <Button />
      {loading ? <Preloader /> : <MealList />}
    </>
  );
}

export default Category;
