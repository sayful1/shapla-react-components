import React, { useState } from "react";
import { Switch } from "../../src";
import DocTab from "./components/DocTab";

const ExampleSwitch: React.FC = () => {
  const [singleSwitch, setSingleSwitch] = useState<boolean>(false);
  const [multiSwitches, setMultiSwitches] = useState<string[]>(["four"]);

  const properties = {
    inputValue: { type: [Boolean, String, Array], default: false },
    value: { type: String, default: "on" },
    trueValue: { type: [Boolean, String], default: true },
    falseValue: { type: [Boolean, String], default: false },
    disabled: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    label: { type: String, default: "" },
    onUpdateInputValue: { type: Function, default: "" },
    onFocus: { type: Function, default: "" },
    onBlur: { type: Function, default: "" },
  };
  const descriptions: any = {};

  const handleSingleSwitchChange = (value: boolean): void => {
    setSingleSwitch(value);
  };

  const handleMultiSwitchChange = (values: string[]): void => {
    setMultiSwitches(values);
  };

  return (
    <DocTab
      heading="Star Rating"
      slug="shapla-switch"
      name="Switch"
      scssMixin="input-switch"
      properties={properties}
      desc={descriptions}
    >
      <div id="app" className="shapla-vue-components--demo">
        <div className="container">
          <h4>Single Switch</h4>

          <Switch
            inputValue={singleSwitch}
            onUpdateInputValue={(v) => handleSingleSwitchChange(v as boolean)}
            label="Enable this"
          />

          <Switch inputValue={singleSwitch} disabled label="Disabled Switch" />

          <pre>
            <code>{JSON.stringify(singleSwitch)}</code>
          </pre>
        </div>
        <div className="container">
          <h4>Multiple Switch</h4>

          <Switch
            inputValue={multiSwitches}
            onUpdateInputValue={(v) => handleMultiSwitchChange(v as string[])}
            value="one"
            label="If checked, value should be added one."
          />

          <Switch
            inputValue={multiSwitches}
            onUpdateInputValue={(v) => handleMultiSwitchChange(v as string[])}
            value="two"
            label="If checked, value should be added two."
          />

          <Switch
            inputValue={multiSwitches}
            onUpdateInputValue={(v) => handleMultiSwitchChange(v as string[])}
            value="three"
            label="If checked, value should be added three."
          />
          <Switch
            inputValue={multiSwitches}
            onUpdateInputValue={(v) => handleMultiSwitchChange(v as string[])}
            value="four"
            readonly
            label="Readonly field, you cannot change it"
          />

          <pre>
            <code>{JSON.stringify(multiSwitches)}</code>
          </pre>
        </div>
      </div>
    </DocTab>
  );
};

export default ExampleSwitch;
