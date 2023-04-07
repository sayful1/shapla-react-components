import React from "react";
import DocTab from "./components/DocTab";
import Input from "../../src/components/input/Input";

const InputFieldPage = () => {
  return (
    <DocTab
      heading="Input: Text"
      slug="Input"
      name="Input"
      scssMixin="Input"
      properties={properties}
      desc={descriptions}
    >
      <div className="test-Input">
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-3-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldOne(value)}
              label="Text field"
              help-text="default size"
              size="default"
              name="text_field[one]"
            />
          </div>

          <div className="shapla-column is-3-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              help-text="small size"
              size="small"
            />
          </div>

          <div className="shapla-column is-3-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              help-text="medium size"
              size="medium"
            />
          </div>

          <div className="shapla-column is-3-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              help-text="large size"
              size="large"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              help-text="Some help text"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              placeholder="Placeholder text"
              help-text="No label"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_one"
              onChange={(value) => setFieldOne(value)}
              label="Full Name *"
              helpText="This field has success status."
              hasSuccess={true}
              validationText="Please enter a valid full name"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              label="Full Name *"
              help-text="This field has validation error status"
              validation-text="Please enter a valid full name"
              hasError={true}
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="email"
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
            <Input v-model="field_two" label="Search field" type="search" />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Password field"
              type="password"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Number field"
              type="number"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Telephone field"
              type="tel"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Url field"
              type="url"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="date_field"
              onChange={(value) => setDateField(value)}
              label="Date field"
              type="date"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="time_field"
              onChange={(value) => setTimeField(value)}
              label="Time field"
              type="time"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="datetime_field"
              onChange={(value) => setDatetimeField(value)}
              label="Date & Time field"
              type="datetime-local"
            />
          </div>

          <div className="shapla-column is-4-tablet">
            <Input
              // v-model="field_one"
              onChange={(value) => setFieldOne(value)}
              type="textarea"
              label="Textarea Field"
              help-text="Some help text."
              validation-text="Please enter full address"
            />
          </div>
        </div>
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-12-tablet">
            <h2>RTL support</h2>
          </div>
          <div className="shapla-column is-3-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              label="Text field"
              help-text="default size"
              size="default"
              dir="rtl"
            />
          </div>
          <div className="shapla-column is-3-tablet">
            <Input
              // v-model="field_two"
              onChange={(value) => setFieldTwo(value)}
              type="textarea"
              label="Text field"
              help-text="default size"
              size="default"
              dir="rtl"
            />
          </div>
        </div>
      </div>
    </DocTab>
  );
};
