import React, { useState } from "react";

export default function NavDrawer() {
  const [onNavDrawer, setOnNavDrawer] = useState(false);
  const onClickSort = () => {
    setOnNavDrawer(!onNavDrawer);
  };
  return (
    <div>
    <div onClick={() => onClickSort()} className="nav-sorting d-flex cu-p">
          <img src=".\img\triangle.svg" alt="" className="mr-5" />
          <b className="nav-text-bold">Сортування по:</b>
          <p className="ml-5">популярності</p>
        </div>
      </div>
     
      
  );
}
