import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/slices/cartSlice";
import CartItem from "../components/cartItem";
import { Link } from "react-router-dom";
import cartImage from "../assets/cart.svg";

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const { totalPrice } = useSelector((state) => state.cart);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <aside className="cart d-flex">
        {items && items.length > 0 ? (
          <div className="cart-container">
            <div className="d-flex justify-between align-center">
              <div className="d-flex align-center">
                <img
                  src={cartImage}
                  width={30}
                  height={30}
                  alt=""
                  className="mr-10"
                />
                <h3 className="title">Ваше замовлення</h3>
              </div>
              <Link to="/">
                <div>
                  <div className="cross"></div>
                </div>
              </Link>
            </div>
            <div className="cart-items-container ">
              {items.map((item) => (
                <CartItem key={item.id} {...item}></CartItem>
              ))}
            </div>
            <div className="cart-final-price">
              <h4>
                Сума замовлення:{" "}
                <b className="cart-color-price">{totalPrice}</b> грн
              </h4>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="user-block">
                <h3 className="">Особисті дані</h3>
                <p>Ім'я</p>
                <input type="text" className="text" />
                <p>Номер телефону</p>
                <input
                  type="text"
                  className="text"
                  placeholder="Мінімум 9 цифр"
                />
              </div>
              <div className="user-block">
                <h3 className="">Адреса доставки</h3>
                <p>Адреса</p>
                <input type="text" className="text" placeholder="вул." />
                <div className="p-10">
                  <label htmlFor="cash">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      checked
                    />
                    Готівка
                  </label>
                  <label htmlFor="card">
                    <input
                      type="radio"
                      id="card"
                      name="payment"
                      value="card"
                      className="p-5"
                    />
                    Картка
                  </label>
                </div>
              </div>
              <button className="submit-btn mb-50" type="submit">
                Оформити замовлення
              </button>
            </form>
          </div>
        ) : (
          <div className="cart-container">
            <h3 className="text-center">Корзина пуста</h3>
          </div>
        )}
      </aside>
    </>
  );
};

export default Cart;
