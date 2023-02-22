import React, { Component } from "react";
import PropTypes from "prop-types";
import { Cross } from "../../index";
import { NotificationPropsInterface } from "./interfaces";

class Notification extends Component<NotificationPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    type: "info",
    title: "",
    message: "",
    showDismisses: true,
    timeout: 3000,
    onClick: () => {},
    onRequestHide: () => {},
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    type: PropTypes.oneOf(["primary", "success", "info", "warning", "error"]),
    title: PropTypes.string,
    message: PropTypes.string,
    showDismisses: PropTypes.bool,
    timeout: PropTypes.number,
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func,
  };

  private timer = 0;

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: NotificationPropsInterface) {
    super(props);

    this.requestHide = this.requestHide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Set timer on mount
   */
  componentDidMount() {
    if (this.props.timeout !== 0) {
      this.timer = setTimeout(this.requestHide, this.props.timeout);
    }
  }

  /**
   * Clear timer on unmount
   */
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  /**
   * Handle item click
   */
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  /**
   * Request to hide notification
   */
  requestHide() {
    if (this.props.onRequestHide) {
      this.props.onRequestHide();
    }
  }

  /**
   * Render component UI
   */
  render() {
    return (
      <div className={this.itemClass()} onClick={this.handleClick}>
        {this.props.showDismisses && <Cross onClick={this.requestHide} />}
        {this.props.title && (
          <div className="shapla-notification__title">{this.props.title}</div>
        )}
        <div className="shapla-notification__title">{this.props.message}</div>
      </div>
    );
  }

  /**
   * Get item CSS classes
   *
   * @returns {string}
   */
  itemClass() {
    const classes = ["shapla-notification"];
    if (
      -1 !==
      ["primary", "success", "info", "warning", "error"].indexOf(
        this.props.type
      )
    ) {
      classes.push(`has-${this.props.type}`);
    }
    return classes.join(" ");
  }
}

export default Notification;
