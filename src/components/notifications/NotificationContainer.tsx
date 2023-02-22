import React from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Notify from "./Notify";
import Notification from "./Notification";
import {
  NotificationContainerPropsInterface,
  NotificationDataArgsInterface,
} from "./interfaces";

class NotificationContainer extends React.Component<
  NotificationContainerPropsInterface,
  { items: NotificationDataArgsInterface[] }
> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    showDismisses: true,
    position: "top-right",
    timeout: 2750,
    enterTimeout: 400,
    leaveTimeout: 400,
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    timeout: PropTypes.number,
    enterTimeout: PropTypes.number,
    leaveTimeout: PropTypes.number,
    showDismisses: PropTypes.bool,
    position: PropTypes.oneOf([
      "top-left",
      "top-center",
      "top-right",
      "bottom-left",
      "bottom-center",
      "bottom-right",
      "center-center",
    ]),
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: NotificationContainerPropsInterface) {
    super(props);

    this.state = { items: [] };

    this.show = this.show.bind(this);
  }

  /**
   * Called immediately after a component is mounted.
   * Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    Notify.on((newParams: NotificationDataArgsInterface) =>
      this.show(newParams)
    );
  }

  /**
   * Render component UI
   */
  render() {
    if (!this.state.items.length) {
      return null;
    }

    const items = this.state.items.map((item) => {
      const key = item.id || new Date().getTime();
      return (
        <CSSTransition
          key={item.id}
          classNames="notification"
          timeout={{
            enter: this.props.enterTimeout,
            exit: this.props.leaveTimeout,
          }}
        >
          <Notification
            key={key}
            type={item.type}
            title={item.title}
            message={item.message}
            timeout={item.timeout}
            showDismisses={this.props.showDismisses}
            onRequestHide={() => this.closeItem(item)}
          />
        </CSSTransition>
      );
    });

    return (
      <div className={this.containerClass()} style={this.containerStyle()}>
        <TransitionGroup>{items}</TransitionGroup>
      </div>
    );
  }

  /**
   * Get CSS classes
   *
   * @returns {string}
   */
  containerClass() {
    const position = this.props.position.split("-");
    return [
      "shapla-notification-container",
      "shapla-notification--" + this.props.position,
      "is-position-" + position[0],
      "is-align-" + position[1],
    ].join(" ");
  }

  /**
   * Get container styles
   *
   * @returns {{}}
   */
  containerStyle() {
    const position = this.props.position.split("-");
    const styles: Record<string, string> = {};
    let points;
    if (position[1] === "left") {
      points = ["-100%, 0, 0", "0, 0, 0", "0, 0, 0", "-100%, 0, 0"];
    } else if (position[1] === "center" && position[0] === "top") {
      points = ["0, -100%, 0", "0, 0, 0", "0, 0, 0", "0, -100%, 0"];
    } else if (position[1] === "center" && position[0] === "bottom") {
      points = ["0, 100%, 0", "0, 0, 0", "0, 0, 0", "0, 100%, 0"];
    } else {
      points = ["100%, 0, 0", "0, 0, 0", "0, 0, 0", "100%, 0, 0"];
    }

    styles["--shapla-notification-enter"] = points[0];
    styles["--shapla-notification-enter-active"] = points[1];
    styles["--shapla-notification-leave"] = points[2];
    styles["--shapla-notification-leave-active"] = points[3];
    styles["--shapla-notification-enter-timout"] =
      this.props.enterTimeout + "ms";
    styles["--shapla-notification-leave-timout"] =
      this.props.leaveTimeout + "ms";

    return styles;
  }

  /**
   * Show notification
   *
   * @param {object} option
   */
  show(option: NotificationDataArgsInterface) {
    if (!(option && option.message)) {
      return;
    }

    const items = this.state.items;

    const position = this.props.position.split("-");
    if (position[0] === "bottom") {
      items.push(option);
    } else {
      items.unshift(option);
    }
    this.setState({ items });
  }

  /**
   * Close item
   *
   * @param option
   */
  closeItem(option: NotificationDataArgsInterface) {
    const items = this.state.items.filter((item) => item.id !== option.id);
    this.setState({ items });
  }
}

export default NotificationContainer;
