import React from 'react'
import PropTypes from 'prop-types';

class Columns extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    multiline: true,
    centered: false,
    gapless: false,
    vcentered: false,
    mobile: false,
    desktop: false,
    className: '',
    columnGap: '',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    multiline: PropTypes.bool,
    centered: PropTypes.bool,
    gapless: PropTypes.bool,
    vcentered: PropTypes.bool,
    mobile: PropTypes.bool,
    desktop: PropTypes.bool,
    columnGap: PropTypes.string,
    className: PropTypes.string,
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
    return (
      <div className={this.classes()} style={this.styles()}>{this.props.children}</div>
    )
  }

  classes() {
    let classes = ['column-gutter-width'];
    if (this.props.multiline) classes.push('flex-wrap');
    if (this.props.centered) classes.push('justify-center');
    if (this.props.vcentered) classes.push('items-center');
    if (this.props.mobile) classes.push('sm:flex');
    if (!this.props.desktop) {
      classes.push('md:flex');
    } else {
      classes.push('lg:flex');
    }

    if (this.props.className) classes.push(this.props.className);

    return classes.join(' ');
  }

  styles() {
    let styles = {};
    if (this.props.columnGap) {
      styles['--column-gutter-width'] = this.props.columnGap;
    }
    if (this.props.gapless) {
      styles['--column-gutter-width'] = 0;
    }
    return styles;
  }
}

export {Columns}
export default Columns;
