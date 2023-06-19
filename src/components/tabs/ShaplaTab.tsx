import React, { useContext, useEffect, useState } from "react";
import ShaplaTabsContext from "./ShaplaTabsContext";

interface Props {
  children: React.ReactNode;
  className?: string;
  name: string | React.ReactNode;
  active?: boolean;
  selected?: boolean;
  navTo?: string;
}

const ShaplaTab = ({ children, selected = false }: Props) => {
  const tabs = useContext(ShaplaTabsContext);
  const [isActive, setIsActive] = useState(false);
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    setIndex(tabs.count);
    tabs.count++;
    setIsActive(index === tabs.selectedIndex);
  }, []);

  useEffect(() => {
    setIsActive(index === tabs.selectedIndex);
  }, [tabs.selectedIndex]);

  useEffect(() => {
    setIsActive(selected);
    if (selected) {
      tabs.selectedIndex = index;
    }
  }, [selected]);

  return (
    <div className={`shapla-tabs__panel ${isActive ? "is-active" : ""}`}>
      {children}
    </div>
  );
};
export default ShaplaTab;
