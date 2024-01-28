import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navigation from "../components/Navigation";
import Card from "../components/Card";
import axios from "axios";
import Skeleton from "../components/Skeleton";
import { setActiveCategory } from "../redux/slices/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const [activeCategoryValue, setActiveCategoryValue] = useState("Все меню");
  const onClickCategory = (value, index) => {
    onChangeCategory(index);
    setActiveCategoryValue(value);
  };
  const onChangeCategory = (index) => {
    console.log(index);
    dispatch(setActiveCategory(index));
  };

  const [onAddToCart, setOnAddToCart] = useState([]);
  const onClickCart = (sushi) => {
    setOnAddToCart((prev) => [...prev, sushi]);
  };

  const [sushiItems, setSushiItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  useEffect(() => {
    console.log("useEffect is running");

    const fetchData = async () => {
      try {
        setIsLoaded(true);
        let apiUrl = `https://65746482f941bda3f2afb0ff.mockapi.io/sushi_items`;
        if (activeCategory) {
          apiUrl += "?category=" + activeCategory;
        }
        const response = await axios.get(apiUrl);
        setSushiItems(response.data);
        setIsLoaded(false);
      } catch (error) {
        console.error("Error fetching sushi items:", error);
      }
    };

    fetchData();
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
          <div className="cards ">
            {isLoaded
              ? [...new Array(6)].map((_, index) => (
                  <Skeleton key={index}></Skeleton>
                ))
              : sushiItems.map((obj) => (
                  <Card
                    onClickCart={() => onClickCart(obj)}
                    key={obj.id}
                    {...obj}
                  ></Card>
                ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
