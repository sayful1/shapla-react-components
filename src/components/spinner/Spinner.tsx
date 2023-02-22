import React, { Component } from "react";
import PropTypes from "prop-types";

interface SpinnerPropsInterface {
  active: boolean;
  single: boolean;
  showText: boolean;
  loadingText: string;
  position: "fixed" | "absolute" | "static";
  size: "default" | "large" | "medium" | "small";
}

class Spinner extends Component<SpinnerPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    active: true,
    single: false,
    showText: false,
    loadingText: "Loading...",
    position: "fixed",
    size: "default",
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    single: PropTypes.bool,
    showText: PropTypes.bool,
    loadingText: PropTypes.string,
    position: PropTypes.oneOf(["fixed", "absolute", "static"]),
    size: PropTypes.oneOf(["default", "large", "medium", "small"]),
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: SpinnerPropsInterface) {
    super(props);
  }

  /**
   * Called immediately after a component is mounted.
   * Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    this.refreshBodyClass(this.props.active);
  }

  /**
   * @param prevProps
   */
  componentDidUpdate(prevProps: SpinnerPropsInterface) {
    if (this.props.active !== prevProps.active) {
      this.refreshBodyClass(this.props.active);
    }
  }

  /**
   * Render component UI
   */
  render() {
    if (!this.props.active) {
      return null;
    }

    const items = [1, 2, 3, 4].map((item) => (
      <div className={this.itemClass(item)} key={item}>
        <div className="shapla-spinner__circle-clipper shapla-spinner__left">
          <div className="shapla-spinner__circle" />
        </div>
        <div className="shapla-spinner__gap-patch">
          <div className="shapla-spinner__circle" />
        </div>
        <div className="shapla-spinner__circle-clipper shapla-spinner__right">
          <div className="shapla-spinner__circle" />
        </div>
      </div>
    ));

    return (
      <div className={this.containerClass()}>
        <div className={this.innerClass()}>
          <div className={this.spinnerClass()}>{items}</div>
          {this.props.showText && (
            <div className="shapla-spinner-text">{this.props.loadingText}</div>
          )}
        </div>
      </div>
    );
  }

  /**
   * Button classes
   *
   * @returns {string}
   */
  containerClass() {
    const classes = ["shapla-spinner-container"];
    classes.push(`is-${this.props.position}`);

    return classes.join(" ");
  }

  /**
   * Spinner inner classes
   *
   * @returns {string}
   */
  innerClass() {
    const classes = ["shapla-spinner-inner"];
    if (this.props.showText) {
      classes.push(`has-text`);
    }

    return classes.join(" ");
  }

  /**
   * Spinner classes
   *
   * @returns {string}
   */
  spinnerClass() {
    const classes = ["shapla-spinner"];
    classes.push(`is-${this.props.size}`);
    if (this.props.single) {
      classes.push("shapla-spinner--single-color");
    }
    return classes.join(" ");
  }

  /**
   * Item class
   *
   * @param {number} index
   * @returns {string}
   */
  itemClass(index: number) {
    return ["shapla-spinner__layer", "shapla-spinner__layer-" + index].join(
      " "
    );
  }

  /**
   * Refresh body class
   *
   * @param {boolean} active
   */
  refreshBodyClass(active: boolean) {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (active) {
      body.classList.add("has-shapla-spinner");
    } else {
      body.classList.remove("has-shapla-spinner");
    }
  }
}

export default Spinner;
