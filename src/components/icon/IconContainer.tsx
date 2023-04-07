import React, { FC, ReactNode, useEffect, useState } from "react";
import "./IconContainer.scss";

interface Props {
  size?: "small" | "medium" | "large";
  hoverable?: boolean;
  children: ReactNode;
}

const IconContainer: FC<Props> = ({ size, hoverable, children }) => {
  const [classes, setClasses] = useState<string>();
  useEffect(() => {
    const classes = ["shapla-icon"];
    if (hoverable) classes.push("is-hoverable");
    if (size) classes.push(`is-${size}`);
    setClasses(classes.join(" "));
  }, [size, hoverable]);

  return <span className={classes}>{children}</span>;
};

export default IconContainer;
