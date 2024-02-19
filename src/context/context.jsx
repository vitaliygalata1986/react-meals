import { createContext, useReducer } from 'react';
import { reducer } from './reducer';
export const FoodContext = createContext();

const initialState = {
  loading: true,
  mealsByCatalog: [],
  filteredCatalog: [],
  recipe: {},
};

export const ContextProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setFilteredCatalog = (filteredCatalog) => {
    dispatch({ type: 'SET_FILTERED_CATALOG', payload: filteredCatalog });
  };

  value.setMealsByCatalog = (mealsCategories) => {
    dispatch({ type: 'SET_MEALS_BY_CATALOG', payload: mealsCategories });
  };

  value.setRecipe = (mealId) => {
    dispatch({ type: 'SET_MEAL_BY_ID', payload: mealId });
  };

  value.setRandomProduct = (mealRandomId) => {
    dispatch({ type: 'SET_RANDOM_PRODUCT', payload: mealRandomId });
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};
