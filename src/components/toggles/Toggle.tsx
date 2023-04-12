import React, { useState, useEffect, ReactNode } from "react";
import ToggleIcon from "./ToggleIcon";
import "./Toggle.scss";
type Props = {
  name: string;
  subtext?: string;
  selected?: boolean;
  iconPosition?: "left" | "right";
  boxedMode?: boolean;
  showDivider?: boolean;
  titleColor?: "default" | "primary" | "secondary";
  children?: ReactNode;
};

const ShaplaTogglePanel = ({
                             name,
                             subtext,
                             selected = false,
                             iconPosition,
                             boxedMode,
                             showDivider,
                             titleColor,
                              children
                           }: Props) => {
  const [isSelected, setIsSelected] = useState(selected);
  const [isOverflowVisible, setIsOverflowVisible] = useState(false);
  const [toggleIconPosition, setToggleIconPosition] = useState<"left" | "right">(
    iconPosition || "left"
  );
  const [toggleShowDivider, setToggleShowDivider] = useState<boolean>(
    showDivider ?? true
  );
  const [toggleBoxedMode, setToggleBoxedMode] = useState<boolean>(
    boxedMode ?? true
  );
  const [toggleTitleColor, setToggleTitleColor] = useState<
    "default" | "primary" | "secondary"
  >(titleColor || "default");

  useEffect(() => {
    setIsSelected(selected);
    if (selected) {
      setIsOverflowVisible(true);
    }
  }, [selected]);

  const toggleActive = () => {
    setIsSelected(!isSelected);
    setIsOverflowVisible(!isOverflowVisible);
  };

  const panelClass = [
    "shapla-toggle-panel--default",
    !toggleShowDivider && !toggleBoxedMode && "shapla-toggle-panel--no-divider",
    toggleBoxedMode && "shapla-toggle-panel--boxed-mode",
  ]
    .filter((c) => c)
    .join(" ");

  const headingClasses = [
    toggleIconPosition !== "left" && `has-icon-${toggleIconPosition}`,
    toggleTitleColor !== "default" && `is-color-${toggleTitleColor}`,
  ].filter((c) => c);

  const panelBodyClass = [
    isSelected && "is-active",
    isOverflowVisible && "is-overflow-visible",
  ]
    .filter((c) => c)
    .join(" ");

  return (
    <div className={`shapla-toggle-panel ${panelClass}`}>
      <div
        className={`shapla-toggle-panel__heading ${headingClasses.join(" ")}`}
        onClick={toggleActive}
      >
        <div className="shapla-toggle-panel__title">
          <h4 className="shapla-toggle-panel__title-text">
            {name}
            {subtext && (
              <div
                className="shapla-toggle-panel__title-subtext"
                dangerouslySetInnerHTML={{ __html: subtext }}
              />
            )}
          </h4>
        </div>
        <div
          className={`shapla-toggle-panel__icon is-icon-${toggleIconPosition}`}
        >
          {isSelected ? (
            <ToggleIcon icon="minus" />
          ) : (
            <ToggleIcon icon="plus" />
          )}
        </div>
      </div>
      <div className={`shapla-toggle-panel__body ${panelBodyClass}`}>
        <div className="shapla-toggle-panel__content">{isSelected && children}</div>
      </div>
    </div>
  );
};

export default ShaplaTogglePanel;
