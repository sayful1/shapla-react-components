/*!
 * Shapla React Progress
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */

import React from 'react'
import PropTypes from "prop-types";

class Progress extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    label: '',
    value: null,
    max: 1,
    striped: false,
    animated: false,
    size: 'default',
    theme: 'default',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    striped: PropTypes.bool,
    animated: PropTypes.bool,
    size: PropTypes.oneOf(['default', 'tiny', 'small', 'medium', 'large']),
    theme: PropTypes.oneOf(['default', 'primary', 'secondary']),
  }

  render() {
    const {value, max, children} = this.props;
    return (
      <div className={this.containerClasses()}>
        <div className={this.barClasses()} style={this.barStyle()} role="progressbar" aria-valuenow={value}
             aria-valuemin={0} aria-valuemax={max}>{children}</div>
      </div>
    )
  }

  containerClasses() {
    const {value, theme, size} = this.props;
    let classes = ['shapla-progress'];
    if ('default' !== size) classes.push(`is-${size}`);

    if (!value && value !== 0) {
      classes.push('is-indeterminate');
      classes.push(`is-${theme}`);
    }

    return classes.join(' ');
  }

  barClasses() {
    const {striped, theme, animated} = this.props;
    let classes = ['shapla-progress-bar'];
    if ('default' !== theme) classes.push(`is-${theme}`);
    if (striped) classes.push(`is-striped`);
    if (animated) classes.push(`is-animated`);

    return classes.join(' ');
  }

  barStyle() {
    const {value, max} = this.props;
    if (value) {
      let width = Math.round((value / max) * 100);
      return {width: `${width}%`}
    }
    return {};
  }
}

export {Progress}
export default Progress;
