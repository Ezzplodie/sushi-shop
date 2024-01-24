import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="header d-flex justify-between">
      <Link to="/">
        <div className="d-flex texttt ">
          <img src=".\img\logo.svg" alt="" width={50} height={50} />
          <div className="header-text ">
            <h1>Onigiri sushi</h1>
            <p>найкраща доставка сушіііііііііі</p>
          </div>
        </div>
      </Link>

      <div className="header-cart d-flex">
        <p className="">520 грн</p>
        <div className="header-line"> </div>
        <img src="./img/cart.svg" alt="" />
        <p>3 шт.</p>
      </div>
    </header>
  );
}
