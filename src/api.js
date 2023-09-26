import { API_URL } from './config';

// detail by id
// так как это асинхронная функция, то мы будем возвращать промис
const getMealById = async (mealId) => {
  const responce = await fetch(API_URL + 'lookup.php?i=' + mealId);
  return await responce.json();
};

// get all categories
const getAllCategories = async () => {
  const responce = await fetch(API_URL + 'categories.php');
  return await responce.json();
};

// filter by category
const getFilteredCategory = async (catName) => {
  const responce = await fetch(API_URL + 'filter.php?c=' + catName.name);
  return await responce.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
