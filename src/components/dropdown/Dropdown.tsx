import React, { Component, createRef, ReactNode } from "react";
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";

interface DropdownPropsInterface {
  hoverable: boolean;
  right: boolean;
  role: string;
  direction: "auto" | "up" | "down";
  maxItems: number;
  trigger: string;
  children?: ReactNode;
  beforeContent?: ReactNode;
  afterContent?: ReactNode;
}

class Dropdown extends Component<
  DropdownPropsInterface,
  { isActive: boolean }
> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    hoverable: true,
    right: false,
    role: "menu",
    direction: "auto",
    maxItems: 0,
    trigger: "",
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    hoverable: PropTypes.bool,
    right: PropTypes.bool,
    role: PropTypes.string,
    direction: PropTypes.oneOf(["auto", "up", "down"]),
    maxItems: PropTypes.number,
  };
  private readonly dropdownRef: React.RefObject<HTMLDivElement>;

  constructor(props: DropdownPropsInterface) {
    super(props);
    this.dropdownRef = createRef<HTMLDivElement>();
    this.state = { isActive: false };
  }

  componentDidMount() {
    document.addEventListener("click", (event) => {
      if (this.state.isActive) {
        if (
          !(this.dropdownRef.current as HTMLElement).contains(
            event.target as HTMLElement
          )
        ) {
          this.setState({ isActive: false });
        }
      }
    });
  }

  render() {
    const {
      role,
      right,
      direction,
      maxItems,
      trigger,
      children,
      beforeContent,
      afterContent,
    } = this.props;
    return (
      <div ref={this.dropdownRef} className={this.containerClasses()}>
        <div
          className="shapla-dropdown-trigger"
          aria-haspopup="true"
          aria-expanded={this.state.isActive ? "true" : "false"}
          onClick={() => this.setState({ isActive: !this.state.isActive })}
        >
          {trigger}
        </div>
        <DropdownMenu
          active={this.state.isActive}
          role={role}
          direction={direction}
          right={right}
          maxItems={maxItems}
          beforeContent={beforeContent}
          afterContent={afterContent}
        >
          {children}
        </DropdownMenu>
      </div>
    );
  }

  containerClasses() {
    const classes = ["shapla-dropdown"];
    if (this.props.hoverable) classes.push("is-hoverable");
    return classes.join(" ");
  }
}

export default Dropdown;
