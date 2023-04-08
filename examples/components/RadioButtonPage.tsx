import React, { useState } from "react";
import DocTab from "./components/DocTab";
import { RadioButton } from "../../src";

const ExampleRadioButton: React.FC = () => {
  const [radioTest, setRadioTest] = useState<string>("");
  const testOptions = [
    { label: "One", value: "one" },
    { label: "Two", value: "two" },
    { label: "Three", value: "three" },
  ];

  const properties = {
    label: { type: String, default: "", required: false },
    value: { type: [String, Number, Boolean], default: "" },
    modelValue: { type: [String, Number, Boolean], default: "" },
    theme: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "normal",
    },
    fullwidth: { type: Boolean, default: false },
    shadow: { type: Boolean, default: false },
    rounded: { type: Boolean, default: false },
  };

  const descriptions = {};

  return (
    <DocTab
      heading="Radio Button"
      slug="radio-button"
      name="RadioButton"
      scssMixin="radio"
      properties={properties}
      desc={descriptions}
    >
      <div>
        {testOptions.map((option) => (
          <RadioButton
            key={option.value}
            label={option.label}
            value={option.value}
            shadow={radioTest === option.value}
            onClick={(v) => setRadioTest(v as string)}
          />
        ))}
        <br style={{ marginBottom: "1rem" }} />
        <pre>
          <code>{radioTest}</code>
        </pre>
      </div>
    </DocTab>
  );
};

export default ExampleRadioButton;
