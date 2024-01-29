import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import CartItem from "../components/cartItem";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  return (
    <>
      <aside className="cart d-flex">
        <div className="cart-container">
          <div className="d-flex justify-between">
            <h3>Ваше замовлення</h3>
            <div className="cross"></div>
          </div>
          <div className="cart-items-container">
            {items.map((item) => (
              <CartItem key={item.id} {...item}></CartItem>
            ))}
          </div>
          <div className="user-block">
            <h3 className="">Особисті дані</h3>
            <form className="tex">
              <p>Ім'я</p>
              <input type="text" className="text" />
            </form>
            <form className="">
              <p>Номер телефону</p>
              <input
                type="text"
                className="text"
                placeholder="Мінімум 9 цифр"
              />
            </form>
          </div>
          <div className="user-block">
            <h3 className="">Адреса доставки</h3>
            <form className="tex">
              <p>Адреса</p>
              <input type="text" className="text" placeholder="вул." />
            </form>
            <div className="p-10">
              <form className="">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label for="huey">Готівка</label>
              </form>
              <form className="">
                <input
                  type="radio"
                  id="huey"
                  name="drone"
                  value="huey"
                  checked
                />
                <label for="huey">Картка</label>
              </form>
            </div>
          </div>
        </div>
        <p></p>
      </aside>
    </>
  );
};
export default Cart;
