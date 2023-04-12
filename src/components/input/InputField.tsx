import React, { FC, ReactNode, useEffect, useState } from "react";
import "./inputField.scss";

interface Props {
  id?: string;
  name?: string;
  label?: string;

  type?:
    | "text"
    | "email"
    | "search"
    | "password"
    | "tel"
    | "url"
    | "number"
    | "textarea"
    | "date"
    | "time"
    | "datetime-local";
  size?: "default" | "small" | "medium" | "large";
  value?: string;
  placeholder?: string;
  autocomplete?: string;
  helpText?: string;
  validationText?: string;
  hasError?: boolean;
  hasSuccess?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  required?: boolean;
  rows?: number;
  dir?: "ltr" | "rtl" | "auto";
  rightIcon?: ReactNode;
  children?: ReactNode;
  onUpdateValue?: (value: string) => void;
  onFocus?: (value: string) => void;
  onBlur?: (value: string) => void;
  onInput?: (value: string) => void;
  onKeyDown?: (event: React.KeyboardEvent) => void;
  onChange?: (value: string) => void;
}

const InputField: FC<Props> = ({
  id = "",
  name = "",
  label = "",
  type = "text",
  size = "default",
  value = "",
  placeholder = "",
  autocomplete = "off",
  helpText = "",
  validationText = "",
  hasError = false,
  hasSuccess = false,
  disabled = false,
  readonly = false,
  required = false,
  rows = 3,
  dir = "ltr",
  rightIcon = null,
  onUpdateValue,
  onFocus,
  onBlur,
  onChange,
  onKeyDown,
}) => {
  const [direction, setDirectionState] = useState(dir);
  const [hasNoLabel, setHasNoLabel] = useState(false);
  const [placeholderText, setPlaceholderText] = useState(placeholder);
  const [hasValue, setHasValue] = useState(false);
  const [showValidationText, setShowValidationText] = useState(false);
  const [showHelpText] = useState(!!(helpText && helpText.length));
  const [isTextarea] = useState(type == "textarea");
  const [hasRightIcon] = useState(true);
  const [containerClasses, setContainerClasses] = useState<string[]>([]);
  const [inputClasses, setInputClasses] = useState<string[]>([]);
  useEffect(() => {
    setContainerClasses(() => {
      const classes = [];
      if (hasNoLabel) classes.push("has-no-label");
      if (size != "default") classes.push(`is-${size}`);
      if ("ltr" != direction) classes.push(`is-direction-${direction}`);
      return classes;
    });
  }, [hasNoLabel, direction, size]);

  useEffect(() => {
    const classes = [];
    if (hasSuccess) classes.push("is-valid");
    if (hasError) classes.push("is-invalid");
    if (hasValue) classes.push("has-value");
    setInputClasses(classes);
  }, [hasSuccess, hasError, hasValue]);

  useEffect(() => {
    setShowValidationText(
      !!(validationText && validationText.length && hasError)
    );
  }, [validationText, hasError]);

  useEffect(() => {
    setHasValue(!(value === null || value === "" || value === undefined));
  }, [value]);

  useEffect(() => {
    setPlaceholderText(hasNoLabel ? "" : placeholder);
  }, [hasNoLabel]);

  useEffect(() => {
    setHasNoLabel(!(label && label.length));
  }, [label]);

  useEffect(() => {
    const direction = -1 !== ["ltr", "rtl", "auto"].indexOf(dir) ? dir : "ltr";
    setDirectionState(direction);
  }, [direction]);
  const handleInputEvent = (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    return (
      onUpdateValue && onUpdateValue((event.target as HTMLInputElement).value)
    );
  };

  const handleKeydownEvent = (
    event: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => onKeyDown && onKeyDown(event);
  const handleOnChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => onChange && onChange((event.target as HTMLInputElement).value);
  const handleFocusEvent = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onFocus && onFocus((event.target as HTMLInputElement).value);
  };
  const handleBlurEvent = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onBlur && onBlur((event.target as HTMLInputElement).value);
  };
  return (
    <div
      className={`shapla-text-field ${containerClasses.join(" ")}`}
      dir={direction}
    >
      <div
        className={`shapla-text-field__control ${
          hasRightIcon ? "has-icons-right" : ""
        }`}
      >
        {isTextarea ? (
          <textarea
            id={id}
            value={value}
            className={`shapla-text-field__textarea ${inputClasses.join(" ")}`}
            name={name}
            required={required}
            disabled={disabled}
            autoComplete={autocomplete}
            rows={rows}
            readOnly={readonly}
            placeholder=""
            dir={direction}
            onFocus={handleFocusEvent}
            onKeyDown={handleKeydownEvent}
            onBlur={handleBlurEvent}
            onInput={handleInputEvent}
            onChange={handleOnChange}
          ></textarea>
        ) : (
          <input
            id={id}
            className={`shapla-text-field__input ${inputClasses.join(" ")} `}
            value={value}
            type={type}
            name={name}
            required={required}
            disabled={disabled}
            autoComplete={autocomplete}
            readOnly={readonly}
            placeholder={placeholderText}
            dir={direction}
            onFocus={handleFocusEvent}
            onKeyDown={handleKeydownEvent}
            onBlur={handleBlurEvent}
            onInput={handleInputEvent}
            onChange={handleOnChange}
          />
        )}
        {label ? (
          <label
            className="shapla-text-field__label"
            dir={direction}
            htmlFor={id}
            dangerouslySetInnerHTML={{ __html: label }}
          />
        ) : (
          ""
        )}

        {!rightIcon ? (
          <>
            {hasSuccess && (
              <span className="icon is-right">
                <svg
                  className="icon-success"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                </svg>
              </span>
            )}

            {hasError && (
              <span className="icon is-right">
                <svg
                  className="icon-error"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </span>
            )}
          </>
        ) : (
          <span>{rightIcon}</span>
        )}
      </div>
      {showValidationText ? (
        <small
          className="shapla-text-field__help-text is-invalid"
          dangerouslySetInnerHTML={{ __html: validationText }}
        />
      ) : (
        ""
      )}
      {showHelpText ? (
        <small
          className="shapla-text-field__help-text"
          dangerouslySetInnerHTML={{ __html: helpText }}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default InputField;
