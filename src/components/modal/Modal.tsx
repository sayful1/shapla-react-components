import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";
import Cross from "../cross/Cross";

interface ModalPropsInterface {
  active: boolean;
  title: string;
  type: "card" | "box" | string;
  closeOnBackgroundClick: boolean;
  showCloseIcon: boolean;
  className: string;
  contentClassName: string;
  backgroundTheme: "dark" | "light";
  contentSize: "small" | "medium" | "large" | "full";
  children: ReactNode;
  footer: ReactNode;
  onClose: () => void;
}

class Modal extends Component<ModalPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    active: false,
    title: "Untitled",
    type: "card", // Also support 'box' design
    closeOnBackgroundClick: true,
    showCloseIcon: true,
    className: "",
    contentClassName: "",
    backgroundTheme: "dark",
    contentSize: "medium",
    children: "",
    footer: "",
    onClose: () => {},
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
    closeOnBackgroundClick: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    className: PropTypes.string,
    contentClassName: PropTypes.string,
    backgroundTheme: PropTypes.oneOf(["dark", "light"]),
    contentSize: PropTypes.oneOf(["small", "medium", "large", "full"]),
    onClose: PropTypes.func,
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: ModalPropsInterface) {
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
  componentDidUpdate(prevProps: ModalPropsInterface) {
    if (this.props.active !== prevProps.active) {
      this.refreshBodyClass(this.props.active);
    }
  }

  /**
   * Render content
   *
   * @returns {JSX.Element|null}
   */
  render() {
    if (!this.props.active) {
      return null;
    }

    if (!this.is_card()) {
      return (
        <div className={this.modalClass()}>
          {this.props.closeOnBackgroundClick ? (
            <div
              className={this.backgroundClasses()}
              onClick={this.props.onClose}
            />
          ) : (
            <div className={this.backgroundClasses()} />
          )}
          {this.props.showCloseIcon && (
            <Cross size="large" fixed={true} onClick={this.props.onClose} />
          )}
          <div className={this.contentClasses()}>{this.props.children}</div>
        </div>
      );
    }

    return (
      <div className={this.modalClass()}>
        {this.props.closeOnBackgroundClick ? (
          <div
            className={this.backgroundClasses()}
            onClick={this.props.onClose}
          />
        ) : (
          <div className={this.backgroundClasses()} />
        )}
        <div className={this.contentClasses()}>
          <div className="shapla-modal-card__header">
            <p className="shapla-modal-card__title">{this.props.title}</p>
            {this.props.showCloseIcon && <Cross onClick={this.props.onClose} />}
          </div>
          <div className="shapla-modal-card__body">{this.props.children}</div>
          <div className="shapla-modal-card__footer is-pulled-right">
            {this.props.footer || (
              <button className="shapla-button" onClick={this.props.onClose}>
                Cancel
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  modalClass() {
    const classes = ["shapla-modal", "is-active"];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(" ");
  }

  backgroundClasses() {
    return ["shapla-modal-background", `is-${this.props.backgroundTheme}`].join(
      " "
    );
  }

  /**
   * Content class
   *
   * @returns {string}
   */
  contentClasses() {
    const classes = ["shapla-modal-content", `is-${this.props.contentSize}`];
    if (this.props.type === "card") classes.push("shapla-modal-card");
    if (this.props.type === "box") classes.push("shapla-modal-box");
    if (this.props.type === "confirm") classes.push("shapla-modal-confirm");
    if (this.props.contentClassName) {
      classes.push(this.props.contentClassName);
    }
    return classes.join(" ");
  }

  /**
   * Check if type is card
   *
   * @returns {boolean}
   */
  is_card() {
    return this.props.type === "card";
  }

  /**
   * Refresh body class
   *
   * @param active
   */
  refreshBodyClass(active: boolean) {
    const body = document.querySelector("body") as HTMLBodyElement;
    if (active) {
      body.classList.add("has-shapla-modal");
    } else {
      setTimeout(() => {
        if (document.querySelectorAll(".shapla-modal.is-active").length === 0) {
          body.classList.remove("has-shapla-modal");
        }
      }, 50);
    }
  }
}

export default Modal;
