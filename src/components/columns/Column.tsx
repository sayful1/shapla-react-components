import React, { Component, ReactNode } from "react";
import PropTypes from "prop-types";

interface ColumnPropsInterface {
  className?: string;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  widescreen?: number;
  fullhd?: number;
  children?: ReactNode;
}

class Column extends Component<ColumnPropsInterface> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    className: "",
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    className: PropTypes.string,
    mobile: PropTypes.number,
    tablet: PropTypes.number,
    desktop: PropTypes.number,
    widescreen: PropTypes.number,
    fullhd: PropTypes.number,
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: ColumnPropsInterface) {
    super(props);
  }

  /**
   * Render component UI
   */
  render() {
    return <div className={this.classes()}>{this.props.children}</div>;
  }

  /**
   * Get column CSS classes
   *
   * @returns {string}
   */
  classes() {
    const _class = ["shapla-column"];

    if (this.props.mobile) _class.push(`is-${this.props.mobile}-mobile`);
    if (this.props.tablet) _class.push(`is-${this.props.tablet}-tablet`);
    if (this.props.desktop) _class.push(`is-${this.props.desktop}-desktop`);
    if (this.props.widescreen)
      _class.push(`is-${this.props.widescreen}-widescreen`);
    if (this.props.fullhd) _class.push(`is-${this.props.fullhd}-fullhd`);
    if (this.props.className) _class.push(this.props.className);

    return _class.join(" ");
  }
}

export default Column;
