import React from "react";

const StoreItem = function (props) {
  return (
    <div class={"store-item"}>
      <img src={"https://www.military1st.ru/media/catalog/product/cache/370473b00da80d51dea07108e3e83e0d/s/u/surplus_undercover_stiefel_8inch_boots_BLK_1.jpg"}/>
      <h3>{props.info.Name}</h3>
      <p>{props.info.Price}</p>
    </div>
  );
};

export default StoreItem;
