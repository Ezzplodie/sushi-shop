import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
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
        <div className="pizza-img">
          <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
      </Link>

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
          <p>Добавити</p>
          {addedCount > 0 && <p className="pizza-count">{addedCount}</p>}
        </button>
      </div>
    </div>
  );
}
