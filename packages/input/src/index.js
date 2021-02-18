/*!
 * Shapla React Checkbox
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */
import React from 'react'
import PropTypes from 'prop-types';

class Input extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    type: 'text',
    size: 'default',
    direction: 'ltr',
    label: '',
    helpText: '',
    validationText: '',
    className: '',
    hasError: false,
    hasSuccess: false,
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    type: PropTypes.oneOf(['text', 'email', 'search', 'password', 'tel', 'url', 'number', 'textarea', 'date', 'time', 'datetime-local']),
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
    direction: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
    label: PropTypes.string,
    value: PropTypes.string,
    helpText: PropTypes.string,
    validationText: PropTypes.string,
    className: PropTypes.string,
    hasError: PropTypes.bool,
    hasSuccess: PropTypes.bool,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {isHovered: false, isFocus: false, isChecked: false};
  }

  /**
   * Render component UI
   */
  render() {
    const {type, value, label, hasSuccess, hasError, validationText, helpText, className, id, ...others} = this.props;
    let successIcon = (
      <span className="icon is-right">
        <svg className="icon-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
      </span>
    );
    let errorIcon = (
      <span className="icon is-right">
          <svg className="icon-error" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
      </span>
    );

    return (
      <div className={this.containerClasses()}>
        <div className={this.controlClasses()}>
          {type === 'textarea' && <textarea className={this.inputClasses()} {...others}>{value}</textarea>}
          {type !== 'textarea' && <input type={type} className={this.inputClasses()} value={value} {...others}/>}
          {this.hasLabel() && <label htmlFor={id} className="shapla-text-field__label">{label}</label>}
          {hasSuccess && successIcon}
          {hasError && errorIcon}
        </div>
        {this.showValidationText() && <span className="shapla-text-field__help-text is-invalid">{validationText}</span>}
        {this.showHelpText() && <span className="shapla-text-field__help-text">{helpText}</span>}
      </div>
    )
  }

  showValidationText() {
    const {validationText, hasError} = this.props;
    return !!(validationText && validationText.length && hasError);
  }

  /**
   * Show help text
   *
   * @returns {boolean}
   */
  showHelpText() {
    const {helpText} = this.props;
    return !!(helpText && helpText.length);
  }

  hasRightIcon() {
    const {hasSuccess, hasError, iconRight} = this.props;
    return !!(iconRight || hasSuccess || hasError);
  }

  hasLabel() {
    const {label} = this.props;
    return !!(label && label.length);
  }

  hasValue() {
    const {value} = this.props;
    return !(value === null || value === '' || value === undefined);
  }

  containerClasses() {
    const {size, direction} = this.props;
    let classes = ['shapla-text-field'];
    if (!this.hasLabel()) {
      classes.push('has-no-label');
    }
    if (size !== 'default') {
      classes.push(`is-${size}`);
    }
    if ('ltr' !== direction) {
      classes.push(`is-direction-${direction}`);
    }
    return classes.join(' ');
  }

  controlClasses() {
    let classes = ['shapla-text-field__control'];
    if (this.hasRightIcon()) {
      classes.push('has-icons-right');
    }
    return classes.join(' ');
  }

  inputClasses() {
    const {hasSuccess, hasError, type, className} = this.props;
    let classes = [];

    if (type === 'textarea') {
      classes.push('shapla-text-field__textarea')
    } else {
      classes.push('shapla-text-field__input')
    }

    if (className) classes.push(className);
    if (hasSuccess) classes.push('is-valid');
    if (hasError) classes.push('is-invalid');
    if (this.hasValue()) classes.push('has-value');

    return classes.join(" ");
  }
}

export {Input}
export default Input;
