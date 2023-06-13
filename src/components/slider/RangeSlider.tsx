import React, { FC, useState } from "react";
import Button from "../button/Button";
import "./slider.scss";

interface Props {
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  showReset?: boolean;
  showInput?: boolean;
  onUpdateValue?: (value: number) => void;
}

const RangeSlider: FC<Props> = ({
  defaultValue = 0,
  value = 10,
  min = 0,
  max = 100,
  step = 1,
  showReset = true,
  showInput = true,
  onUpdateValue,
}) => {
  const [_value, setValue] = useState<number>(value);

  // const { min, max, step, showReset, showInput, onUpdateValue } = props;

  const triggerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = formatNumber(event.target.value);
    setValue(value);
    onUpdateValue && onUpdateValue(value);
  };

  const resetToDefault = () => {
    const value = formatNumber(defaultValue);
    setValue(value);
    onUpdateValue && onUpdateValue(value);
  };

  const formatNumber = (value: string | number) => {
    const number = typeof value !== "number" ? Number.parseFloat(value) : value;
    return Number.isNaN(number) ? 0 : number;
  };

  return (
    <div className="shapla-input-slider">
      <input
        className="shapla-input-slider__range"
        type="range"
        value={_value}
        min={min}
        max={max}
        step={step}
        onChange={triggerInput}
      />
      {showInput && (
        <div className="shapla-input-slider__input-container">
          <input
            type="number"
            className="shapla-input-slider__input"
            value={_value}
            min={min}
            max={max}
            step={step}
            onChange={triggerInput}
          />
        </div>
      )}
      {showReset && (
        <div
          className="shapla-input-slider__reset"
          title="Reset to default value"
          onClick={resetToDefault}
        >
          <Button shadow fab theme="primary">
            <svg
              className="shapla-input-slider__reset-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" d="M0 0h24v24H0V0z" />
              <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z" />
            </svg>
          </Button>
        </div>
      )}
    </div>
  );
};
export default RangeSlider;
