import { ReactNode } from "react";

export interface TabsDataInterface {
  [x: string]: any;
  tabs: TabsDataInterface[];
  selectedIndex: number;
  count: number;
  onChange?: (tab: TabsDataInterface, index: number) => void;
  name?: string;
  navTo?: string;
  navItemClass?: string;
}

export interface TabReactNodeTypeInterface {
  name: string;
}

export interface TabsProps {
  alignment?: "left" | "center" | "right";
  size?: "default" | "small" | "medium" | "large";
  tabStyle?: "default" | "boxed" | "toggle" | "rounded";
  fullwidth?: boolean;
  vertical?: boolean;
  onChangeTab?: (tab: TabsDataInterface, index: number) => void;
  children: ReactNode;
}

// export { TabsDataInterface, TabVNodeTypeInterface, TabsPropsInterface };
