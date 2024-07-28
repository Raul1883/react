import React, { useState } from "react";
import cart from "../img/cart-plus-svgrepo-com.svg";

const StoreItem = function (props) {
  const [flag, setFlag] = useState(true);

  const ButtonClick = function () {
    setFlag(!flag);
    props.info.Call(props.info);
  };

  return (
    <div className={"store-item"}>
      <img
        src={
          "https://www.military1st.ru/media/catalog/product/cache/370473b00da80d51dea07108e3e83e0d/s/u/surplus_undercover_stiefel_8inch_boots_BLK_1.jpg"
        }
      />
      <h3>{props.info.Name}</h3>
      <div className={"price-container"}>
        <p>{props.info.Price}</p>
        <button className={flag ? "store-button" : "store-button active"}
         onClick={ButtonClick}>
          Добавить в корзину
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
