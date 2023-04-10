import React, { FC, useState } from 'react';
import "./Switch.scss"

interface Props {
  modelValue?: boolean | string | string[];
  value?: string;
  trueValue?: boolean | string;
  falseValue?: boolean | string;
  disabled?: boolean;
  readonly?: boolean;
  label?: string;
  onUpdateModelValue?: (value: boolean | string | string[]) => void;
  onFocus?: (value: boolean | string | string[]) => void;
  onBlur?: (value: boolean | string | string[]) => void;
}

const Switch: FC<Props> = ({
  modelValue = false,
  value = 'on',
  trueValue = true,
  falseValue = false,
  disabled = false,
  readonly = false,
  label = '',
  onUpdateModelValue = () => {},
  onFocus = () => {},
  onBlur = () => {},
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const shouldBeChecked = (() => {
    if (modelValue instanceof Array) {
      return modelValue.includes(value);
    }
    return modelValue === trueValue;
  })();

  const switchClasses = (() => {
    const classes: string[] = [];
    if (shouldBeChecked) classes.push('is-checked');
    if (disabled) classes.push('is-disabled');
    if (isFocus) classes.push('is-focused');

    return classes.join(' ');
  })();

  const getValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    if (modelValue instanceof Array) {
      const newValue = [...modelValue];

      if (isChecked) {
        newValue.push(value);
      } else {
        newValue.splice(newValue.indexOf(value), 1);
      }

      return newValue;
    }

    return isChecked ? trueValue : falseValue;
  };

  const updateInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!readonly) onUpdateModelValue(getValue(event));
  };

  const handleFocusEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readonly) {
      setIsFocus(true);
      onFocus(getValue(event));
    }
  };

  const handleBlurEvent = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!disabled && !readonly) {
      setIsFocus(false);
      onBlur(getValue(event));
    }
  };

  return (
    <label className={`shapla-switch ${switchClasses}`}>
      <input
        type="checkbox"
        className="shapla-switch__input"
        checked={shouldBeChecked}
        value={value}
        disabled={disabled}
        onChange={updateInput}
        onFocus={handleFocusEvent}
        onBlur={handleBlurEvent}
      />
      <span className="shapla-switch__label">{label}</span>
      <span className="shapla-switch__track" />
      <span className="shapla-switch__thumb">
        <span className="shapla-switch__focus-helper" />
      </span>
    </label>
  );
};

export default Switch;
