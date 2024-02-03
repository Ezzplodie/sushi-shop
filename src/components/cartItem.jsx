import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, minusItem, removeItem } from "../redux/slices/cartSlice";

const CartItem = ({ id, title, count, price, image }) => {
  const dispatch = useDispatch();
  const { totalPrice } = useSelector((state) => state.cart);
  const onClickPlus = () => {
    dispatch(
      addItem({
        id,
      })
    );
  };
  const onClickMinus = () => {
    dispatch(minusItem(id));
  };
  return (
    <div className="cart-item d-flex p-10 cart-border">
      <div className="info">
        <div className="ident">
          <p className="cart-title">{title}</p>
          <div className="ident d-flex align-center">
            <button onClick={onClickPlus} className="cart-button plus">
              +
            </button>
            <div className="quantity">{count}</div>
            <button onClick={onClickMinus} className="cart-button minus">
              -
            </button>
            <div></div>
            <b className="ml-10">{price * count} грн.</b>
          </div>
        </div>
      </div>
      <img src={image} alt="" width={80} height={80} />
    </div>
  );
};
export default CartItem;
