import { useEffect, useContext } from 'react';
import { useAsyncError, useLocation, useNavigate } from 'react-router-dom';
import Preloader from '../component/Preloader';
import CategoryList from '../component/CategoryList';
import Search from '../component/Search';
import { getAllCatalog } from '../api';
import { FoodContext } from '../context/context';

function Home() {
  const { loading, setFilteredCatalog } = useContext(FoodContext);
  const { pathname, search } = useLocation();
  const push = useNavigate();

  const handleSearch = (str) => {
    push({
      pathname,
      search: `?search=${str}`,
    });
  };
  const getCatalog = async () => {
    try {
      const dataFetch = await getAllCatalog();
      const mealsCatalog = dataFetch?.categories ?? [];
      setFilteredCatalog(
        search
          ? mealsCatalog.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : mealsCatalog
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCatalog();
    // eslint-disable-next-line
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {loading ? <Preloader /> : <CategoryList />}
    </>
  );
}

export default Home;
