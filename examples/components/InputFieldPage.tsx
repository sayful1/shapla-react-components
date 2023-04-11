import React from "react";
import DocTab from "./components/DocTab";
import InputField from "../../src/components/input/InputField";

const InputFieldPage = () => {
  const properties = {
    type: {
      type: String,
      default: "text",
    },
    size: {
      type: String,
      default: "default",
    },
    modelValue: { type: [Number, String], default: null },
    label: { type: String, default: null, required: false },
    placeholder: { type: String, default: null },
    autocomplete: { type: String, default: null },
    name: { type: String, default: null, required: false },
    id: { type: String, default: null, required: false },
    helpText: { type: String, default: null, required: false },
    validationText: { type: String, default: null, required: false },
    hasError: { type: Boolean, default: false },
    hasSuccess: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    rows: { type: [String, Number], default: null },
    dir: { type: String, default: "ltr" },
    onModalValue: { type: Function, default: null },
    onFocus: { type: Function, default: null },
    onBlur: { type: Function, default: null },
    onChange: { type: Function, default: null },
  };
  const descriptions = {};
  const [fieldOne, setFieldOne] = React.useState("");
  const [fieldTwo, setFieldTwo] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [dateTimeField, setDateTimeField] = React.useState("");
  const [dateField, setDateField] = React.useState("");
  const [timeField, setTimeField] = React.useState("");
  const [hasEmailError, setHasEmailError] = React.useState(false);
  const [hasEmailSuccess, setHasEmailSuccess] = React.useState(false);
  const handleBlurEvent = (value: string) => {
    !validateEmail(value) ? setHasEmailError(true) : setHasEmailSuccess(true); // hasEmailError = true;
  };
  const handleInputEvent = () => {
    setHasEmailError(false);
    setHasEmailSuccess(false);
  };
  const validateEmail = (value: string) => {
    return (
      /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value) !==
      false
    );
  };
  return (
    <DocTab
      heading="InputField: Text"
      slug="InputField"
      name="Input"
      scssMixin="InputField"
      properties={properties}
      desc={descriptions}
    >
      <div className="test-Input">
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-3-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              helpText="default size"
              size="default"
              name="text_field[one]"
            />
          </div>

           

          <div className="shapla-column is-3-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              helpText="medium size"
              size="medium"
            />

          </div>

          <div className="shapla-column is-3-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              helpText="large size"
              size="large"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              helpText="Some help text"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              placeholder="Placeholder text"
              helpText="No label"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Full Name *"
              helpText="This field has success status."
              hasSuccess={true}
              validationText="Please enter a valid full name"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldOne}
              onChange={(value) => setFieldOne(value)}
              label="Full Name *"
              helpText="This field has validation error status"
              validation-text="Please enter a valid full name"
              hasError={true}
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={email}
              onChange={(value) => setEmail(value)}
              label="Email *"
              hasError={hasEmailError}
              hasSuccess={hasEmailSuccess}
              helpText="Write a valid email address."
              validationText="Please enter a valid email"
              onBlur={handleBlurEvent}
              onInput={handleInputEvent}
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              onChange={(value) => setFieldTwo(value)}
              value={fieldTwo}
              label="Search field"
              type="search"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Password field"
              type="password"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Number field"
              type="number"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Telephone field"
              type="tel"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Url field"
              type="url"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={dateField}
              onChange={(value) => setDateField(value)}
              label="Date field"
              type="date"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={timeField}
              onChange={(value) => setTimeField(value)}
              label="Time field"
              type="time"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={dateTimeField}
              onChange={(value) => setDateTimeField(value)}
              label="Date & Time field"
              type="datetime-local"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <InputField
              value={fieldOne}
              onChange={(value) => setFieldOne(value)}
              type="textarea"
              label="Textarea Field"
              helpText="Some help text."
              validationText="Please enter full address"
            />
          </div>
        </div>
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-12-tablet">
            <h2>RTL support</h2>
          </div>
          <div className="shapla-column is-3-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              helpText="default size"
              size="default"
              dir="rtl"
            />
          </div>
          <div className="shapla-column is-3-tablet">
            <InputField
              value={fieldTwo}
              onChange={(value) => setFieldTwo(value)}
              type="textarea"
              label="Text field"
              helpText="default size"
              size="default"
              dir="rtl"
            />
          </div>
        </div>
      </div>
    </DocTab>
  );
};
export default InputFieldPage;
