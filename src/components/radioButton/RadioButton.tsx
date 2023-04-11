import React from "react";
import ShaplaButton from "../button/Button";

interface ButtonProps {
  label?: string;
  value?: string;
  modelValue?: string | number | boolean;
  theme?: "default" | "primary" | "secondary";
  size?: "small" | "normal" | "medium" | "large";
  fullwidth?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  onClick: (value?: string) => void;
}

const RadioButton: React.FC<ButtonProps> = ({
  label = "",
  value = "",
  modelValue = "",
  theme = "default",
  size = "normal",
  fullwidth = false,
  shadow = false,
  rounded = false,
  onClick,
}) => {
  return (
    <ShaplaButton
      outline={modelValue !== value}
      theme={theme}
      size={size}
      fullwidth={fullwidth}
      shadow={shadow}
      rounded={rounded}
      onClick={() => onClick(value)}
    >
      {label}
    </ShaplaButton>
  );
};

export default RadioButton;
