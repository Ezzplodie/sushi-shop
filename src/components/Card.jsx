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
  const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения курсора

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
      <Link
        to={`/sushi/${id}`}
        className="pizza-container"
        onMouseEnter={() => setIsHovered(true)} // Устанавливаем isHovered в true при наведении курсора
        onMouseLeave={() => setIsHovered(false)} // Устанавливаем isHovered в false при уходе курсора
      >
        <div className="pizza-img">
          <img src={image} alt="" className="pizza-img-img" />
        </div>
        <h3>{title}</h3>
        <p
          className={
            isHovered ? "hover-sushi-text visible" : "hover-sushi-text"
          }
        >
          {" "}
          {/* Применяем класс "visible" при isHovered равном true */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus tempore
          error aut perspiciatis illum voluptate repudiandae praesentium dolore
          vitae corporis culpa, quisquam animi fugiat esse temporibus similique
          quibusdam numquam? Adipisci!
        </p>
      </Link>
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
