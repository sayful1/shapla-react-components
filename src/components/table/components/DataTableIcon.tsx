import React, { FC, SVGProps } from "react";

interface SVGIconProps {
  icon: string;
  size?: number | string;
  className?: string;
}

const SVGIcon: FC<SVGIconProps> = ({ icon, size = 24, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} className={className}>
      <path d="M0 0h24v24H0z" fill="none" />
      {icon === "expand-more" && (
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
      )}
      {icon === "expand-less" && (
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" />
      )}
      {icon === "arrow-upward" && (
        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
      )}
      {icon === "arrow-downward" && (
        <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
      )}
    </svg>
  );
};

export default SVGIcon;
