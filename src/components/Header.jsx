import React from "react";
import logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Header() {
  const { items, totalPrice } = useSelector((state) => state.cart);
  const totalCount = items.reduce((sum, item) => sum + item.count, 0);
  const location = useLocation();
  return (
    <header className="header d-flex justify-between">
      <Link to="/">
        <div className="d-flex texttt ">
          <img src={logo} alt="" width={50} height={50} />
          <div className="header-text ">
            <h1>Onigiri sushi</h1>
            <p>найкраща доставка сушіііііііііі</p>
          </div>
        </div>
      </Link>

      {location.pathname !== "/cart" && (
        <Link to="/cart">
          <div className="header-cart d-flex">
            <p className="">{totalPrice} грн</p>
            <div className="header-line"> </div>
            <img src="./img/cart.svg" alt="" />
            <p>{totalCount} шт.</p>
          </div>
        </Link>
      )}
    </header>
  );
}
