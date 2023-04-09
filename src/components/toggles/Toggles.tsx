import React, { FC, createContext, useMemo, ReactNode } from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  accordion?: boolean;
  iconPosition?: "left" | "right";
  boxedMode?: boolean;
  showDivider?: boolean;
  titleColor?: "default" | "primary" | "secondary";
  children?: ReactNode;
}

interface ShaplaTogglesContextProps {
  uuid: string;
  accordion?: boolean;
  iconPosition?: "left" | "right";
  boxedMode?: boolean;
  showDivider?: boolean;
  titleColor?: "default" | "primary" | "secondary";
}

export const ShaplaTogglesContext = createContext<ShaplaTogglesContextProps>({
  uuid: "",
});

const ShaplaToggles: FC<Props> = ({
                                                 accordion = true,
                                                 iconPosition = "left",
                                                 boxedMode = true,
                                                 showDivider = true,
                                                 titleColor = "default",
                                                 children,
                                               }) => {
  const uuid = useMemo(() => uuidv4(), []);
  const data = useMemo<ShaplaTogglesContextProps>(() => {
    return {
      uuid,
      accordion,
      iconPosition,
      boxedMode,
      showDivider,
      titleColor,
    };
  }, [accordion, boxedMode, iconPosition, showDivider, titleColor, uuid]);

  return (
    <ShaplaTogglesContext.Provider value={data}>
      <div className="shapla-toggles" data-id={uuid}>
        {children}
      </div>
    </ShaplaTogglesContext.Provider>
  );
};

export default ShaplaToggles;
