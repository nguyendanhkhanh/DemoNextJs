import React from "react";
import { imagePath } from "../../config";

type NavigationArrowType = {
  index: number;
  num: number;
  onChange: (index: number) => void;
  disabled?: boolean;
};

function NavigationArrow(props: NavigationArrowType) {
  const { index, num, onChange, disabled = false } = props;
  const list = new Array(num).fill("");

  return (
    <div className="navigation-arrow">
      <div
        className={`arrow arrow-left`}
        onClick={() => {
          onChange(index > 0 ? index - 1 : index);
        }}
      >
        <img
          src={`${imagePath}/${
            index <= 0 ? "ic_arrow_disable" : "ic_arrow_enable"
          }.png`}
        />
      </div>
      {!disabled
        ? list.map((e, i) => (
            <div
              key={i}
              className={`navigation-dash ${i === index && "active"}`}
            ></div>
          ))
        : null}
      <div
        className="arrow"
        onClick={() => {
          onChange(index < num - 1 ? index + 1 : index);
        }}
      >
        <img
          src={`${imagePath}/${
            index >= num - 1 ? "ic_arrow_disable" : "ic_arrow_enable"
          }.png`}
        />
      </div>
    </div>
  );
}

export default NavigationArrow;
