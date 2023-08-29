import React, { FC, HTMLAttributes, ReactNode, useEffect, useState } from "react";
import "./IconContainer.scss";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  size?: "small" | "medium" | "large";
  hoverable?: boolean;
  children: ReactNode;
}

const IconContainer: FC<Props> = (props) => {
  const { size, hoverable, children, ...others } = props;
  const [classes, setClasses] = useState<string>();
  useEffect(() => {
    const classes = ["shapla-icon"];
    if (hoverable) classes.push("is-hoverable");
    if (size) classes.push(`is-${size}`);
    setClasses(classes.join(" "));
  }, [size, hoverable]);

  return <span className={classes} {...others}>{children}</span>;
};

export default IconContainer;
