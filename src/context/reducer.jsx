export function reducer(state, { type, payload }) {
  // console.log(payload);
  switch (type) {
    case 'SET_FILTERED_CATALOG':
      return {
        ...state,
        filteredCatalog: payload,
        loading: false,
      };
    case 'SET_MEALS_BY_CATALOG':
      return {
        ...state,
        mealsByCatalog: payload,
        loading: false,
      };
    case 'SET_MEAL_BY_ID':
      return {
        ...state,
        recipe: payload,
        loading: false,
      };
    case 'SET_RANDOM_PRODUCT':
      return {
        ...state,
        recipe: payload,
        loading: false,
      };
    case 'SEARCH_PRODUCT':
      return {
        ...state,
        findProductBySearch: payload,
        loading: false,
      };
    default:
      return state;
  }
}
