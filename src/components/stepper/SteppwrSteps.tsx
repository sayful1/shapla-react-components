import React, {
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import "./style/StepperStep.scss";
import { StepperContext } from "./Stepper";

interface Props {
  active?: boolean;
  complete?: boolean;
  editable?: boolean;
  error?: boolean;
  firstItem?: boolean;
  lastItem?: boolean;
  step?: string;
  label?: string;
  altLabel?: string;
  children?: ReactNode;
}

const StepperStep: FC<Props> = (props) => {
  const [index, setIndex] = useState(-1);
  const Props = useContext(StepperContext)!;
  const isVertical = useMemo(
    () => Props.props.type === "vertical",
    [Props.props.type]
  );
  const isFirstItem = useMemo(() => index === 0, [index]);
  const isLastItem = useMemo(
    () => Props.count === index + 1,
    [index, Props.count]
  );

  useEffect(() => {
    setIndex(Props.count);
    Props.count++;
  }, [Props]);

  const stepClasses = useMemo(() => {
    const classes = [];
    if (props.active) classes.push("is-active");
    if (props.complete) classes.push("is-complete");
    if (props.editable) classes.push("is-editable");
    if (props.error) classes.push("has-error");
    if (Props.props.type) classes.push(`type-${Props.props.type}`);
    if (Props.props.labelPlacement)
      classes.push(`lp-${Props.props.labelPlacement}`);

    return classes.join(" ");
  }, [props, Props.props]);

  const [contentStyle, setContentStyle] = useState({ height: "0" });
  useEffect(() => {
    if (props.active) {
      setContentStyle({ height: "auto" });
    } else {
      setContentStyle({ height: "0" });
    }
  }, [props.active]);

  return (
    <>
      <div className={`shapla-stepper-step ${stepClasses}`}>
        <div className="shapla-stepper-step__line">
          {!isFirstItem && <hr className="shapla-stepper-step__line-left" />}
          {!isLastItem && <hr className="shapla-stepper-step__line-right" />}
        </div>
        <div className="shapla-stepper-step__icon-container">
          <div className="shapla-stepper-step__icon">
            <slot name="step">{props.step}</slot>
          </div>
        </div>
        <div className="shapla-stepper-step__label">
          <div className="shapla-stepper-step__title">{props.label}</div>
          {props.altLabel && (
            <div className="shapla-stepper-step__subtitle">
              {props.altLabel}
            </div>
          )}
        </div>
      </div>
      {isVertical && (
        <div className="shapla-stepper-content">
          <div className="shapla-stepper-content__wrapper" style={contentStyle}>
            {props.children}
          </div>
        </div>
      )}
    </>
  );
};
export default StepperStep;
