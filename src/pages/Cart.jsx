import React, { useState } from "react";

const Cart = ({ onAddToCart }) => {
  console.log(onAddToCart, "WTFFFF");
  const [onCartOpen, setOnCartOpen] = useState(true);
  const onCloseCart = () => {
    setOnCartOpen(!onCloseCart);
    console.log("CART CLOSED");
  };
  return (
    <>
      <div className="background-drawer">
        <aside className="cart d-flex">
          <div className="cart-container">
            <div className="d-flex justify-between">
              <h3>Ваше замовлення</h3>
              <div onClick={onCloseCart} className="cross"></div>
            </div>
            <div className="cart-items-container">
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
              <div className="cart-item d-flex p-10">
                <div className="info">
                  <div className="ident">
                    <p className="cart-title">
                      Філадельфія з лососем та креветкою
                    </p>
                    <div className="ident d-flex align-center">
                      <button className="cart-button">+</button>
                      <div className="quantity">1</div>
                      <button className="cart-button">-</button>
                      <p>200 грн</p>
                    </div>
                  </div>
                </div>
                <img src=".\img\sushi1.jpg" alt="" width={80} height={80} />
              </div>
            </div>
            {/* <div className="user-block">
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
          </div> */}
          </div>
          <p></p>
        </aside>
      </div>
    </>
  );
};
export default Cart;
