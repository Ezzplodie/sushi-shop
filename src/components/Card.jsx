import React, { useState } from "react";

export default function Card({
  image,
  title,
  price,
  options,
  optionsbottom,
  onClickCart,
}) {
  const [pizzaCount, setPizzaCount] = useState(0);
  const onClickAddPizza = () => {
    setPizzaCount(pizzaCount + 1);
  };
  const [activeOption, setActiveOption] = useState(0);
  const [activeOptionBottom, setActiveOptionBottom] = useState(1);
  const onSetActiveOption = (index) => {
    setActiveOption(index);
  };
  const onSetActiveOptionBottom = (index) => {
    setActiveOptionBottom(index);
  };

  return (
    <div className="card">
      <div className="pizza-img">
        <img src={image} alt="" />
      </div>
      <h3>{title}</h3>

      <div className="pizza-container">
        <div className="pizza-options">
          {options && (
            <ul className="d-flex justify-around options-upper border">
              {options.map((obj, i) => (
                <li
                  key={obj}
                  onClick={() => onSetActiveOption(i)}
                  className={
                    activeOption === i ? "active" : "options-upper-text"
                  }
                >
                  {obj}
                </li>
              ))}
            </ul>
          )}
          {optionsbottom && (
            <ul className="d-flex justify-between options-upper">
              {optionsbottom.map((obj, i) => (
                <li
                  key={obj}
                  onClick={() => onSetActiveOptionBottom(i)}
                  className={
                    activeOptionBottom === i ? "active" : "options-upper-text"
                  }
                >
                  {obj}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="cart-price d-flex justify-between">
        <p>від {price} ₴</p>
        <button className="cart-price-add d-flex">
          <div className="testing"> </div>
          <p onClick={() => onClickCart()}>Добавити</p>
          <p className="pizza-count">{pizzaCount}</p>
        </button>
      </div>
    </div>
  );
}
