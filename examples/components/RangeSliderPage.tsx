import React, { useState } from "react";
import { RangeSlider } from "../../src";
import DocTab from "./components/DocTab";

export default function ExampleSlider() {
  const [value, setValue] = useState<number>(5);

  const properties = {
    value: { type: [Number, String], default: 10 },
    default: { type: Number, default: 0 },
    min: { type: Number, default: null, required: false },
    max: { type: Number, default: null, required: false },
    step: { type: Number, default: null, required: false },
    showReset: { type: Boolean, default: true },
    showInput: { type: Boolean, default: true },
  };
  const descriptions = {};

  return (
    <DocTab
      heading="Input: Range Slider"
      slug="shapla-range-slider"
      name="RangeSlider"
      scss-mixin="slider"
      properties={properties}
      desc={descriptions}
    >
      <RangeSlider value={value} onUpdateValue={setValue} min={0} max={100} />
    </DocTab>
  );
}
