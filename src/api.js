import { API_URL } from './config';

// так как это асинхронная функция, то мы будем возвращать промис
// detail by id
const getMealById = async (mealId) => {
  const responce = await fetch(API_URL + 'lookup.php?i=' + mealId);
  return await responce.json();
};

// get all categories
const getAllCatalog = async () => {
  const responce = await fetch(API_URL + 'categories.php');
  return await responce.json();
};

// filter by category
const getAllMealsByCatalog = async (catName) => {
  const responce = await fetch(API_URL + 'filter.php?c=' + catName.name);
  return await responce.json();
};

// get random single product
const getRandomMealProduct = async () => {
  const responce = await fetch(API_URL + 'random.php');
  return await responce.json();
};

export {
  getMealById,
  getAllCatalog,
  getAllMealsByCatalog,
  getRandomMealProduct,
};
