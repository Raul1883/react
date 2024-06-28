import React from "react";
import cart from "../img/cart-plus-svgrepo-com.svg";

const StoreItem = function (props) {
  return (
    <div class={"store-item"}>
      <img
        src={
          "https://www.military1st.ru/media/catalog/product/cache/370473b00da80d51dea07108e3e83e0d/s/u/surplus_undercover_stiefel_8inch_boots_BLK_1.jpg"
        }
      />
      <h3>{props.info.Name}</h3>
      <div class={"price-container"}>
        <p>{props.info.Price}</p>
        <button
          class={"store-button"}
          data-name={props.info.Name}
          data-check={false}
        >
          <img src={cart} />
        </button>
      </div>
    </div>
  );
};

export default StoreItem;
