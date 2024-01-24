import React from "react";

export default function Navigation({ activeCategory, onClickCategory }) {
  const caregories = ["Все меню", "Сети", "Роли", "Суші", "Десерти"];

  return (
    <section className="navigation d-flex justify-between">
      <>
        <ul className="navigation-kinds d-flex">
          {caregories.map((value, index) => (
            <li
              onClick={() => onClickCategory(value, index)}
              key={index}
              className={
                activeCategory === index ? "nav-active" : "nav-kinds__item"
              }
            >
              {value}
            </li>
          ))}
        </ul>
      </>
    </section>
  );
}
