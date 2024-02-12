import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export default function Card({
  image,
  title,
  price,
  options,
  optionsbottom,
  id,
}) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const [isHovered, setIsHovered] = useState(false);

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      image,
    };
    dispatch(addItem(item));
  };

  return (
    <div className="card">
      <Link to={`/sushi/${id}`}>
        <div>
          <div className="pizza-img">
            <img src={image} alt="" className="pizza-img-img" />
          </div>
          <h3
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {title}
          </h3>
        </div>
      </Link>
      <CSSTransition
        in={isHovered}
        timeout={300}
        classNames="fade"
        unmountOnExit
      >
        <p className="hover-sushi-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore
          error aut perspiciatis
        </p>
      </CSSTransition>
      <div className="pizza-container">
        <div className="pizza-options">
          {options && (
            <ul className="d-flex justify-around options-upper border">
              {options.map((obj, i) => (
                <li key={obj} className={"options-upper-text"}>
                  {obj}
                </li>
              ))}
            </ul>
          )}
          {optionsbottom && (
            <ul className="d-flex justify-between options-upper">
              {optionsbottom.map((obj) => (
                <li key={obj} className={"options-upper-text"}>
                  {obj}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="cart-price d-flex justify-between">
        <p>{price} ₴</p>
        <button onClick={onClickAdd} className="cart-price-add d-flex">
          <div className="testing"> </div>
          <p>Добавить</p>
          {addedCount > 0 && <p className="pizza-count">{addedCount}</p>}
        </button>
      </div>
    </div>
  );
}
