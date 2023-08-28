import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

export default function ({ sort, setSort, priceMini, priceMax }) {
  const [value, setValue] = useState([sort, setSort]);

  return (
    <div>
      <div className="title">Prix entre :</div>

      <RangeSlider
        id="range-slider"
        priceMini={priceMini}
        priceMax={priceMax}
        sort={sort}
        defaultValue={[0, 50]}
      />
      {sort && <RangeSlider />}
    </div>
  );
}
