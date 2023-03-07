import React, {
  Component,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from "react";
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
  onClick?: ((event: SyntheticEvent) => void) | (() => void);
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
    theme: PropTypes.oneOf(["default", "primary", "secondary"]),
    size: PropTypes.oneOf(["small", "normal", "medium", "large"]),
    fullwidth: PropTypes.bool,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    fab: PropTypes.bool,
    shadow: PropTypes.bool,
    loading: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
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
    const { href, children, onClick, disabled, className, ...others } =
      this.props;
    if (href) {
      return (
        <a href={href} className={this.classes()} onClick={onClick} {...others}>
          {children}
        </a>
      );
    }
    return (
      <button
        className={this.classes()}
        disabled={disabled}
        onClick={onClick}
        {...others}
      >
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
    const classes = ["shapla-button"];

    if (this.props.fullwidth) classes.push("is-fullwidth");
    if (this.props.outline) classes.push("is-outline");
    if (this.props.rounded) classes.push("is-rounded");
    if (this.props.fab) classes.push("is-fab");
    if (this.props.shadow) classes.push("has-shadow");
    if (this.props.loading) classes.push("is-loading");
    if ("default" !== this.props.theme) classes.push(`is-${this.props.theme}`);
    if ("normal" !== this.props.size) classes.push(`is-${this.props.size}`);

    return classes.join(" ");
  }
}

export default Button;
