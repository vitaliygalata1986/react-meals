import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Preloader from '../component/Preloader';
import CategoryList from '../component/CategoryList';
import Search from '../component/Search';
import { getAllCategories } from '../api'; // импортируем метод всех категори

function Home() {
  const [catalog, setCatalog] = useState([]);
  const [filteredCatalog, setFilteredCatalog] = useState([]); // отфильтрованній каталог
  const [loading, setloading] = useState(true);

  const { pathname, search } = useLocation(); // search - get параметры, котоыре мы хотим использоватть, т.е. то, что будем вводить
  const push = useNavigate(); // нам нужно изменить браузерную строка после ввода в строку посика
  console.log(search);

  const handleSearch = (str) => {
    setFilteredCatalog(
      catalog.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );
    push({
      pathname,
      search: `?search=${str}`, // оба эти значения склеются воединно
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
      setFilteredCatalog(
        search
          ? data.categories.filter((item) =>
              item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories // то будет копироваться все то, что было в изначальном варианте
      );
      setloading(false);
    });
  }, [search]);

  return (
    <>
      {' '}
      <Search cb={handleSearch} />
      {loading ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
    </>
  );
}

export default Home;
