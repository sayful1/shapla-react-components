import React, { Component, createRef, CSSProperties, ReactNode } from "react";
import PropTypes from "prop-types";

interface DropdownMenuPropsInterface {
  active: boolean;
  right: boolean;
  role: string;
  direction: "auto" | "up" | "down";
  maxItems: number;
  children?: ReactNode;
  beforeContent?: ReactNode;
  afterContent?: ReactNode;
}

class DropdownMenu extends Component<
  DropdownMenuPropsInterface,
  { autoClass: string; isActive: boolean }
> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    active: false,
    right: false,
    role: "menu",
    direction: "auto",
    maxItems: 0,
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    right: PropTypes.bool,
    role: PropTypes.string,
    direction: PropTypes.oneOf(["auto", "up", "down"]),
    maxItems: PropTypes.number,
  };
  private readonly dropdownMenuRef: React.RefObject<HTMLDivElement>;

  constructor(props: DropdownMenuPropsInterface) {
    super(props);
    this.dropdownMenuRef = createRef();
    this.state = { autoClass: "", isActive: false };

    this.calculateDirection = this.calculateDirection.bind(this);
  }

  componentDidMount() {
    this.setState({ isActive: this.props.active });
  }

  componentDidUpdate(preProps: DropdownMenuPropsInterface) {
    if (preProps.active !== this.props.active) {
      this.calculateDirection();
      this.setState({ isActive: this.props.active });
    }
  }

  render() {
    const { role, children, beforeContent, afterContent } = this.props;
    return (
      <div
        className={this.containerClass()}
        style={this.containerStyle()}
        role={role}
        ref={this.dropdownMenuRef}
      >
        <div className="shapla-dropdown-menu__inner">
          {beforeContent}
          <div className="shapla-dropdown-menu__content">{children}</div>
          {afterContent}
        </div>
      </div>
    );
  }

  containerClass() {
    const classes = ["shapla-dropdown-menu"];
    if (this.state.isActive) classes.push("is-active");
    if (this.state.autoClass) classes.push(this.state.autoClass);
    if (this.props.right) classes.push("is-right");
    if (this.props.direction === "up") classes.push("is-up");
    if (this.props.maxItems) classes.push("has-max-items");
    return classes.join(" ");
  }

  containerStyle() {
    if (this.props.maxItems) {
      return {
        "--max-menu-items": this.props.maxItems,
      } as CSSProperties;
    }
    return undefined;
  }

  calculateDirection() {
    const browserHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      el = this.dropdownMenuRef.current as HTMLElement,
      elParent = el.parentNode as HTMLElement,
      rect = elParent.getBoundingClientRect(),
      win = elParent.ownerDocument.defaultView,
      elFromTop = rect.top + (win?.pageYOffset ?? 0),
      spaceToBottom = browserHeight - elFromTop,
      elHeight = el.scrollHeight;

    if (elHeight + 15 < spaceToBottom) {
      this.setState({ autoClass: "is-down" });
    } else {
      this.setState({ autoClass: "is-up" });
    }
  }
}

export default DropdownMenu;
