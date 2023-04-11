import React, { FC, useState } from "react";
import "./radio.scss";

interface Props {
  label?: string;
  value: string;
  modelValue?: string | number | boolean;
  checked?: boolean;
  onUpdateModelValue: (value: string) => void;
}

const Radio: FC<Props> = ({
  label,
  value = "",
  modelValue,
  checked,
  onUpdateModelValue,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const emitChange = () => onUpdateModelValue(value);
  const shouldBeChecked =
    typeof checked === "boolean" ? checked : modelValue === value;

  const getClasses = (): string => {
    const classes = [];
    if (shouldBeChecked) classes.push("is-checked");
    if (isFocus) classes.push("is-focused");
    if (isHovered) classes.push("is-hovered");
    return classes.join(" ");
  };

  return (
    <label className={`shapla-radio ${getClasses()}`}>
      <input
        type="radio"
        className="shapla-radio__button"
        checked={shouldBeChecked}
        value={value}
        onChange={emitChange}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
      />
      <span className="shapla-radio__label">{label}</span>
      <span
        className="shapla-radio__outer-circle"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ></span>
      <span className="shapla-radio__inner-circle"></span>
    </label>
  );
};
export default Radio;
