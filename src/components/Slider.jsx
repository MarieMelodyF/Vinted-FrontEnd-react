import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Slider = (sort) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);
  const [value, setValue] = useState("");

  return (
    <div>
      <div className="title">
        <span> Prix entre :</span>

        <RangeSlider
          id="slider"
          min={0}
          max={500}
          value={value}
          defaultValue={[0, 200]}
          sort={setValue}
        />
      </div>
    </div>
  );
};

export default Slider;
