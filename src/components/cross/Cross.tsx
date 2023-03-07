import React, { Component, HTMLAttributes } from "react";

interface CrossPropsInterface extends HTMLAttributes<HTMLSpanElement> {
  size?: "normal" | "small" | "medium" | "large";
  ariaLabel?: string;
  fixed?: boolean;
  onClick?: () => void;
}

class Cross extends Component<CrossPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    size: "normal",
    ariaLabel: "close",
    fixed: false,
    onClick: () => {},
  };

  /**
   * Render component UI
   */
  render() {
    const { size, fixed, ariaLabel, onClick, className, ...others } =
      this.props;
    return (
      <span
        className={this.classes()}
        aria-label={ariaLabel}
        onClick={onClick}
        {...others}
      />
    );
  }

  /**
   * Button classes
   *
   * @returns {string}
   */
  classes() {
    const classes = ["shapla-delete-icon"];

    if (this.props.className) classes.push(this.props.className);
    if (this.props.size === "small") classes.push("is-small");
    if (this.props.size === "medium") classes.push("is-medium");
    if (this.props.size === "large") classes.push("is-large");
    if (this.props.fixed) classes.push("is-fixed");

    return classes.join(" ");
  }
}

export default Cross;
