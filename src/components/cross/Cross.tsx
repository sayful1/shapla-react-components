import React, { Component, HTMLAttributes } from "react";

interface CrossPropsInterface extends HTMLAttributes<HTMLSpanElement> {
  size?: "normal" | "small" | "medium" | "large";
  ariaLabel?: string;
  fixed?: boolean;
}

class Cross extends Component<CrossPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    size: "normal",
    ariaLabel: "close",
    fixed: false
  };

  constructor(props: CrossPropsInterface) {
    super(props);

    this.classes = this.classes.bind(this);
  }

  /**
   * Render component UI
   */
  render() {
    const { size, fixed, ariaLabel, className, ...others } = this.props;
    return (
      <span className={this.classes()} aria-label={ariaLabel} {...others} />
    );
  }

  /**
   * Button classes
   *
   * @returns {string}
   */
  classes(): string {
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
