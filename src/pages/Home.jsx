import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from "axios";
import Skeleton from "../components/Skeleton";
import { setActiveCategory, setFilters } from "../redux/slices/filterSlice";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { fetchSushiItemsAsync } from "../redux/slices/sushiSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const [activeCategoryValue, setActiveCategoryValue] = useState("Все меню");
  const onClickCategory = (value, index) => {
    onChangeCategory(index);
    setActiveCategoryValue(value);
  };
  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index));
  };

  const [onAddToCart, setOnAddToCart] = useState([]);
  const onClickCart = (sushi) => {
    setOnAddToCart((prev) => [...prev, sushi]);
  };
  const sushiItems = useSelector((state) => state.sushi.items);
  const sushiSets =
    sushiItems.length > 0
      ? sushiItems.filter((sushi) => sushi.category === 1)
      : [];
  const sushiRolls =
    sushiItems.length > 0
      ? sushiItems.filter((sushi) => sushi.category === 2)
      : [];
  console.log(sushiSets);
  const status = useSelector((state) => state.sushi.status);
  console.log(status, "STATUS");
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
        })
      );
    }
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const category = activeCategory > 0 ? `category=${activeCategory}` : "";

      setIsLoaded(true);
      try {
        const { data } = await axios.get(
          `https://65746482f941bda3f2afb0ff.mockapi.io/sushi_items?page=${category}`
        );
        dispatch(
          fetchSushiItemsAsync({
            data,
            category,
            activeCategory,
          })
        );
        setIsLoaded(false);
      } finally {
      }
    };

    fetchData();
  }, [activeCategory]);

  useEffect(() => {
    const queryString = qs.stringify({
      activeCategory,
    });
    // console.log(queryString);
    navigate(`?${queryString}`);
  }, [activeCategory]);

  return (
    <>
      <section className="content">
        <div className="navigation-container d-flex justify-between">
          <h3 className="content-title">{activeCategoryValue}</h3>
          {
            <Navigation
              activeCategory={activeCategory}
              onClickCategory={onClickCategory}
            ></Navigation>
          }
        </div>

        <div className="cards-container">
          <div className="cards">
            {status === "error" ? (
              <div className="error">
                <h2>ПОКИ ПУСТО... ОЧІКУЙТЕ НА ОНОВЛЕННЯ МЕНЮ 👽</h2>
              </div>
            ) : isLoaded ? (
              [...new Array(6)].map((_, index) => (
                <Skeleton key={index}></Skeleton>
              ))
            ) : (
              sushiRolls.map((obj) => (
                <Card
                  key={obj.id}
                  onClickCart={() => onClickCart(obj)}
                  {...obj}
                ></Card>
              ))
            )}
          </div>
          <div className="cards sets">
            {sushiSets.map((obj) => (
              <Card
                key={obj.id}
                onClickCart={() => onClickCart(obj)}
                {...obj}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
