import React from 'react'
import PropTypes from 'prop-types';

class Column extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    className: ''
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
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render component UI
   */
  render() {
    return <div className={this.classes()}>{this.props.children}</div>
  }

  /**
   * Get column CSS classes
   *
   * @returns {string}
   */
  classes() {
    let _class = [];

    if (this.props.mobile) _class.push(`sm:w-${this.props.mobile}/12`);
    if (this.props.tablet) _class.push(`md:w-${this.props.tablet}/12`);
    if (this.props.desktop) _class.push(`lg:w-${this.props.desktop}/12`);
    if (this.props.widescreen) _class.push(`xl:w-${this.props.widescreen}/12`);
    if (this.props.fullhd) _class.push(`xxl:w-${this.props.fullhd}/12`);
    if (_class.length < 1) _class.push('flex-1');
    if (this.props.className) _class.push(this.props.className);

    return _class.join(' ');
  }
}

export {Column}
export default Column;
