import React, { Component, HTMLAttributes, ReactNode } from "react";
import PropTypes from "prop-types";

interface ButtonPropsInterface
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  theme?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | string;
  size?: "small" | "normal" | "medium" | "large" | string;
  fullwidth?: boolean;
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  fab?: boolean;
  shadow?: boolean;
  href?: string;
  loading?: boolean;
  children: ReactNode;
}

class Button extends Component<ButtonPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    theme: "default",
    size: "normal",
    fullwidth: false,
    disabled: false,
    outline: false,
    rounded: false,
    fab: false,
    shadow: false,
    loading: false,
    href: "",
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    theme: PropTypes.oneOf([
      "default",
      "primary",
      "secondary",
      "success",
      "error",
      "warning",
    ]),
    size: PropTypes.oneOf(["small", "normal", "medium", "large"]),
    fullwidth: PropTypes.bool,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    fab: PropTypes.bool,
    shadow: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: ButtonPropsInterface) {
    super(props);
  }

  /**
   * Render component UI
   */
  render() {
    const {
      theme,
      size,
      fab,
      fullwidth,
      loading,
      outline,
      rounded,
      shadow,
      href,
      children,
      disabled,
      className,
      ...others
    } = this.props;
    if (href) {
      return (
        <a href={href} className={this.classes()} {...others}>
          {children}
        </a>
      );
    }
    return (
      <button className={this.classes()} disabled={disabled} {...others}>
        {children}
      </button>
    );
  }

  /**
   * Button classes
   *
   * @returns {string}
   */
  classes() {
    const {
      fullwidth,
      outline,
      rounded,
      fab,
      shadow,
      loading,
      theme,
      size,
      className,
    } = this.props;
    const classes = ["shapla-button"];

    if (fullwidth) classes.push("is-fullwidth");
    if (outline) classes.push("is-outline");
    if (rounded) classes.push("is-rounded");
    if (fab) classes.push("is-fab");
    if (shadow) classes.push("has-shadow");
    if (loading) classes.push("is-loading");
    if ("default" !== theme) classes.push(`is-${theme}`);
    if ("normal" !== size) classes.push(`is-${size}`);
    if (className) classes.push(className);

    return classes.join(" ");
  }
}

export default Button;
