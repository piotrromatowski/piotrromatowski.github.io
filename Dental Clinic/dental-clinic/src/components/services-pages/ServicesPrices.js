import React from "react";

import { PricesItems } from "../PricesItems";

function ServicesPrices(pricesdata) {
  return (
    <>
      <div className="selected-prices">
        <div className="price-list">
          {PricesItems.filter(
            (price) => price.field === pricesdata.pricesdata
          ).map((filteredPrice) => (
            <div className="type" key={filteredPrice.index}>
              <i className="fas fa-tooth"></i>
              <h2>{filteredPrice.field}</h2>
              <h3>{filteredPrice.information}</h3>
              {filteredPrice.type.map((items, index) => {
                return (
                  <ul key={filteredPrice.activity}>
                    <li className="activity">{items.activity}</li>
                    <li className="price">{items.price}</li>
                  </ul>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServicesPrices;
