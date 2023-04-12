import React, { useState } from "react";
import DocTab from "./components/DocTab";
import { Radio } from "../../src";

const ExampleRadio: React.FC = () => {
  const [radioTest, setRadioTest] = useState<string>("");
  const testOptions = [
    { label: "One", value: "one" },
    { label: "Two", value: "two" },
    { label: "Three", value: "three" },
  ];

  const properties = {
    label: { type: String, default: "", required: false },
    value: { type: String, default: null },
    modelValue: { type: [String, Number, Boolean], default: "" },
    checked: { type: Boolean, default: undefined },
  };
  return (
    <DocTab
      heading="Radio Input"
      slug="shapla-radio"
      name="Radio"
      scssMixin="radio"
      properties={properties}
      desc={{}}
    >
      <div>
        {testOptions.map((option) => (
          <Radio
            key={option.value}
            label={option.label}
            value={option.value}
            checked={radioTest === option.value}
            onUpdateModelValue={setRadioTest}
          />
        ))}
        <pre>{radioTest}</pre>
      </div>
    </DocTab>
  );
};

export default ExampleRadio;
