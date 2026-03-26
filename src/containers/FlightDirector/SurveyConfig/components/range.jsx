import React from "react";
import {Label, Input} from "helpers/reactstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Range = ({
  min = 1,
  max = 5,
  value = 1,
  disabled,
  updateForm,
  updateValue = () => {},
  id,
  survey,
}) => {
  const start = parseInt(min, 10);
  const end = parseInt(max, 10);
  const range = end - start + 1;
  const labels = isNaN(range)
    ? {}
    : Array(range)
        .fill(0)
        .reduce(
          (prev, next, i) => Object.assign({}, prev, {[start + i]: start + i}),
          {},
        );
  return (
    <div>
      {!survey && (
        <Label>
          Min
          <Input
            type="number"
            max={parseInt(max, 10) - 1}
            value={min}
            onChange={e => updateForm(id, "min", parseInt(e.target.value, 10))}
          />
        </Label>
      )}
      {!survey && (
        <Label>
          Max
          <Input
            type="number"
            min={parseInt(min, 10) + 1}
            value={max}
            onChange={e => updateForm(id, "max", parseInt(e.target.value, 10))}
          />
        </Label>
      )}
      <Slider
        min={start}
        max={end}
        value={value}
        marks={labels}
        disabled={disabled}
        step={1}
        onChange={e => updateValue(e)}
      />
    </div>
  );
};

export default Range;
