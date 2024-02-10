import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SushiFull = () => {
  const { id } = useParams();
  const [sushi, setSushi] = useState(null); // Initialize sushi state as null

  useEffect(() => {
    async function fetchSushi() {
      try {
        const { data } = await axios.get(
          "https://65746482f941bda3f2afb0ff.mockapi.io/sushi_items/" + id
        );
        setSushi(data);
      } catch (error) {
        console.error(error, "error with fetching sushi modal");
      }
    }
    fetchSushi();
  }, [id]); // Include id as dependency so useEffect will re-run when id changes

  return (
    <div className="mt-50">
      {/* Conditionally render img tag only when sushi is defined */}
      {sushi && (
        <div className="d-flex align-center">
          <img src={sushi.imageUrl} width={300} height={300} alt="sushi img" />
          <div className="ml-20">
            <h2>{sushi.title}</h2>
            <p className="mt-10 mb-10">Ціна: {sushi.price} грн.</p>
            <ul className=" justify-between">
              {sushi.ingredients &&
                sushi.ingredients.map((ingredient, index) => (
                  <li key={index} className={"options-upper-text"}>
                    {ingredient}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SushiFull;
