import "./scss/fonts.scss";
import "./scss/App.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import React from "react";

import filterSlice from "./redux/slices/filterSlice";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";
function App() {
  const SearchContext = React.createContext("");
  console.log(SearchContext);

  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <Cart></Cart>
        <div className="container">
          <Routes>
            {/* <Route path="/cart" element={<Cart></Cart>}></Route> */}
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
