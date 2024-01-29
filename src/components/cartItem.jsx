import React from "react";

const CartItem = ({ id, title, count, price, image }) => {
  return (
    <div className="cart-item d-flex p-10">
      <div className="info">
        <div className="ident">
          <p className="cart-title">{title}</p>
          <div className="ident d-flex align-center">
            <button className="cart-button">+</button>
            <div className="quantity">{count}</div>
            <button className="cart-button">-</button>
            <div>
              <b className="ml-10">{price * count} грн.</b>
            </div>
          </div>
        </div>
      </div>
      <img src={image} alt="" width={80} height={80} />
    </div>
  );
};
export default CartItem;
