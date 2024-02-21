import { useContext, useState } from 'react';
import { searchAllMealByName } from '../api';
import { FoodContext } from '../context/context';
import Products from '../component/Products';
import { useEffect } from 'react';

function Search() {
  const { searchMealByName } = useContext(FoodContext);
  const [valueInputSearch, setValue] = useState('');

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  useEffect(() => {
    handleSubmit();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = async () => {
    try {
      const dataFetch = await searchAllMealByName(valueInputSearch);
      searchMealByName(dataFetch?.meals ?? []);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="row">
        <div className="row-search">
          <div className="input-field col s12">
            <input
              type="search"
              id="search-field"
              placeholder="search"
              value={valueInputSearch}
              onKeyDown={handleKey}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
          <button onClick={handleSubmit} className="btn btn-search">
            Search
          </button>
        </div>
      </div>
      <Products />
    </>
  );
}

export default Search;
