import React, { Component } from "react";
import PropTypes from "prop-types";
import Cross from "../cross/Cross";

interface ChipPropsInterface {
  text: string;
  imageSrc: string;
  height: string;
  deletable: boolean;
  small: boolean;
  onDeleteIconClick: () => void;
  children?: JSX.Element | string;
}

class Chip extends Component<ChipPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    text: "",
    imageSrc: "",
    height: "32px",
    deletable: false,
    small: false,
    onDeleteIconClick: () => {},
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    text: PropTypes.string,
    imageSrc: PropTypes.string,
    height: PropTypes.string,
    deletable: PropTypes.bool,
    small: PropTypes.bool,
    onDeleteIconClick: PropTypes.func,
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: ChipPropsInterface) {
    super(props);
  }

  /**
   * Render component UI
   */
  render() {
    return (
      <span className={this.chipClasses()}>
        {this.props.imageSrc && (
          <img
            className="shapla-chip__contact"
            src={this.props.imageSrc}
            alt=""
          />
        )}
        <span className="shapla-chip__text">
          {this.props.children || this.props.text}
        </span>
        {this.props.deletable && (
          <span className="shapla-chip__action">
            <Cross onClick={this.props.onDeleteIconClick} />
          </span>
        )}
      </span>
    );
  }

  /**
   * Chip classes
   *
   * @returns {string}
   */
  chipClasses() {
    const classes = ["shapla-chip"];
    if (this.props.deletable) {
      classes.push("shapla-chip--deletable");
    }
    if (this.props.imageSrc) {
      classes.push("shapla-chip--contact");
    }

    return classes.join(" ");
  }

  /**
   * Chip style
   *
   * @returns {{}}
   */
  chipStyle() {
    const style: Record<string, string> = {};
    if (this.props.small) {
      style["--shapla-chip-height"] = "24px";
    }
    if (this.props.height !== "32px") {
      style["--shapla-chip-height"] = this.props.height;
    }
    return style;
  }
}

export default Chip;
