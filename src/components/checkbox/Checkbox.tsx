import React, {
  Component,
  HTMLAttributes,
  ReactNode,
  SyntheticEvent,
} from "react";
import PropTypes from "prop-types";

interface CheckboxPropsInterface extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string | number;
  disabled?: boolean;
  checked?: boolean;
  onFocus?: (event: SyntheticEvent) => void;
  onBlur?: (event: SyntheticEvent) => void;
  onChange?: (event: SyntheticEvent) => void;
  children?: ReactNode;
}

interface CheckboxStateInterface {
  isHovered: boolean;
  isFocus: boolean;
  isChecked: boolean;
}

class Checkbox extends Component<
  CheckboxPropsInterface,
  CheckboxStateInterface
> {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    label: "",
    value: "yes",
    disabled: false,
    checked: false,
    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {},
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
  };

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props: CheckboxPropsInterface) {
    super(props);
    this.state = { isHovered: false, isFocus: false, isChecked: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    if (this.props.checked) {
      this.setState({ isChecked: this.props.checked });
    }
  }

  /**
   * Render component UI
   */
  render() {
    const { disabled, value, label, children, ...others } = this.props;
    return (
      <label className={this.labelClasses()}>
        <input
          type="checkbox"
          className="shapla-checkbox__input"
          checked={this.state.isChecked}
          disabled={disabled}
          value={value}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          {...others}
        />
        <span className="shapla-checkbox__label">{children || label}</span>
        <span className="shapla-checkbox__focus-helper" />
        <span
          className="shapla-checkbox__box-outline"
          onMouseEnter={() => this.setState({ isHovered: true })}
          onMouseLeave={() => this.setState({ isHovered: false })}
        >
          <span className="shapla-checkbox__tick-outline" />
        </span>
      </label>
    );
  }

  labelClasses() {
    const classes = ["shapla-checkbox"];
    if (this.props.disabled) classes.push("is-disabled");
    if (this.state.isChecked) classes.push("is-checked");
    if (this.state.isFocus) classes.push("is-focused");
    if (this.state.isHovered) classes.push("is-hovered");
    return classes.join(" ");
  }

  handleChange(event: SyntheticEvent) {
    this.setState({
      isChecked: (event.target as HTMLInputElement).checked,
    });
    const { onChange } = this.props;
    if (onChange) {
      onChange(event);
    }
  }

  handleBlur(event: SyntheticEvent) {
    this.setState({ isFocus: false });
    const { onBlur } = this.props;
    if (onBlur) {
      onBlur(event);
    }
  }

  handleFocus(event: SyntheticEvent) {
    this.setState({ isFocus: true });
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(event);
    }
  }
}

export default Checkbox;
