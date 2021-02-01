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
    let classes = ['shapla-columns'];
    if (this.props.multiline) classes.push('is-multiline');
    if (this.props.centered) classes.push('is-centered');
    if (this.props.vcentered) classes.push('is-vcentered');
    if (this.props.mobile) classes.push('is-mobile');
    if (this.props.desktop) classes.push('is-desktop');
    if (this.props.gapless) classes.push('is-gapless');
    if (!!this.props.columnGap) classes.push('is-variable');

    if (this.props.className) classes.push(this.props.className);

    return classes.join(' ');
  }

  styles() {
    let styles = {};
    if (this.props.columnGap) {
      styles['--shapla-column-gap'] = this.props.columnGap;
    }
    return styles;
  }
}

export {Columns}
export default Columns;
