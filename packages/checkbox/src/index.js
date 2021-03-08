/*!
 * Shapla React Checkbox
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */
import React from 'react'
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    label: '',
    value: 'yes',
    disabled: false,
    checked: false,
    onFocus: () => {
    },
    onBlur: () => {
    },
    onChange: () => {
    },
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {isHovered: false, isFocus: false, isChecked: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    if (this.props.checked) {
      this.setState(state => state.isChecked = this.props.checked);
    }
  }

  /**
   * Render component UI
   */
  render() {
    const {checked, disabled, value, label, onChange, onBlur, onFocus, children, ...others} = this.props;
    return (
      <label className={this.labelClasses()}>
        <input type="checkbox" className="shapla-checkbox__input"
               checked={this.state.isChecked} disabled={disabled} value={value}
               onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange}
               {...others}
        />
        <span className="shapla-checkbox__label">{children || label}</span>
        <span className="shapla-checkbox__focus-helper"/>
        <span className="shapla-checkbox__box-outline"
              onMouseEnter={() => this.setState(state => state.isHovered = true)}
              onMouseLeave={() => this.setState(state => state.isHovered = false)}>
          <span className="shapla-checkbox__tick-outline"/>
        </span>
      </label>
    )
  }

  labelClasses() {
    let classes = ['shapla-checkbox'];
    if (this.props.disabled) classes.push('is-disabled');
    if (this.state.isChecked) classes.push('is-checked');
    if (this.state.isFocus) classes.push('is-focused');
    if (this.state.isHovered) classes.push('is-hovered');
    return classes.join(" ");
  }

  handleChange(event) {
    this.setState(state => state.isChecked = event.target.checked);
    const {onChange} = this.props;
    if (onChange) {
      onChange(event);
    }
  }

  handleBlur(event) {
    this.setState(state => state.isFocus = false);
    const {onBlur} = this.props;
    if (onBlur) {
      onBlur(event);
    }
  }

  handleFocus(event) {
    this.setState(state => state.isFocus = true);
    const {onFocus} = this.props;
    if (onFocus) {
      onFocus(event);
    }
  }
}

export {Checkbox}
export default Checkbox;
