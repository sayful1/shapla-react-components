/*!
 * Shapla React Button
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */
import React from 'react'
import PropTypes from 'prop-types';

class Button extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    theme: 'default',
    size: 'normal',
    fullwidth: false,
    disabled: false,
    outline: false,
    rounded: false,
    fab: false,
    shadow: false,
    href: '',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    theme: PropTypes.oneOf(['default', 'primary', 'secondary']),
    size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
    fullwidth: PropTypes.bool,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    rounded: PropTypes.bool,
    fab: PropTypes.bool,
    shadow: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func,
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
    if (this.props.href) {
      return (
        <a
          href={this.props.href}
          className={this.classes()}
          onClick={this.props.onClick}
        >{this.props.children}</a>
      )
    }
    return (
      <button
        className={this.classes()}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >{this.props.children}</button>
    )
  }

  /**
   * Button classes
   *
   * @returns {string}
   */
  classes() {
    let classes = ['shapla-button'];

    if (this.props.fullwidth) classes.push('is-fullwidth');
    if (this.props.outline) classes.push('is-outline');
    if (this.props.rounded) classes.push('is-rounded');
    if (this.props.fab) classes.push('is-fab');
    if (this.props.shadow) classes.push('has-shadow');
    if ('default' !== this.props.theme) classes.push(`is-${this.props.theme}`);
    if ('normal' !== this.props.size) classes.push(`is-${this.props.size}`);

    return classes.join(' ');
  }
}

export {Button}
export default Button;
