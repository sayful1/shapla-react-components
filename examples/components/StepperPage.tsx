import React, { useState } from "react";
import { Stepper, StepperStep } from "../../src/";

interface Step {
  key: string;
  label: string;
  number_text: string;
  completed: boolean;
  current: boolean;
}

const StepperPage = () => {
  const [activeStep, setActiveStep] = useState(2);
  const steps: Step[] = [
    {
      key: "one",
      label: "One",
      number_text: "1",
      completed: false,
      current: true,
    },
    {
      key: "two",
      label: "two",
      number_text: "2",
      completed: false,
      current: false,
    },
    {
      key: "three",
      label: "three",
      number_text: "3",
      completed: false,
      current: false,
    },
  ];

  return (
    <>
      <Stepper>
        <StepperStep
          step="1"
          label="Select a campaign"
          active={activeStep === 1}
          complete={activeStep > 1}
        >
          Stepper Content goes here.
        </StepperStep>
        <StepperStep
          step="2"
          label="Select an add group"
          altLabel="Optional"
          active={activeStep === 2}
          complete={activeStep > 2}
        >
          Second step content
        </StepperStep>
        <StepperStep
          step="3"
          label="Select an add"
          active={activeStep === 3}
          complete={activeStep > 3}
        >
          3rd step content
        </StepperStep>
      </Stepper>

      <Stepper
        v-model={[activeStep, setActiveStep]}
        label-placement="alternative"
      >
        <StepperStep
          step="1"
          label="Select a campaign"
          active={activeStep === 1}
          complete={activeStep > 1}
        >
          Stepper Content goes here.
        </StepperStep>
        <StepperStep
          step="2"
          label="Select an add group"
          altLabel="Optional"
          active={activeStep === 2}
          complete={activeStep > 2}
        >
          Second step content
        </StepperStep>
        <StepperStep
          step="3"
          label="Select an add"
          active={activeStep === 3}
          complete={activeStep > 3}
        >
          3rd step content
        </StepperStep>
      </Stepper>

      <Stepper v-model={[activeStep, setActiveStep]} type="vertical">
        <StepperStep
          step="1"
          label="Select a campaign"
          active={activeStep === 1}
          complete={activeStep > 1}
        >
          Stepper Content goes here.
        </StepperStep>
        <StepperStep
          step="2"
          label="Select an add group"
          altLabel="Optional"
          active={activeStep === 2}
          complete={activeStep > 2}
        >
          Second step content
        </StepperStep>
        <StepperStep
          step="3"
          label="Select an add"
          active={activeStep === 3}
          complete={activeStep > 3}
        >
          3rd step content
        </StepperStep>
      </Stepper>
    </>
  );
};
export default StepperPage;
