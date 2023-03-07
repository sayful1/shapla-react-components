import { RefObject } from "react";

interface NotificationDataArgsInterface {
  message: string;
  id?: string;
  type?: "primary" | "success" | "info" | "warning" | "error";
  title?: string;
  timeout?: number;
  nodeRef?: RefObject<any>;
}

interface NotificationPropsInterface {
  type: "primary" | "success" | "info" | "warning" | "error";
  title: string;
  message: string;
  showDismisses: boolean;
  timeout: number;
  onClick: () => void;
  onRequestHide: () => void;
}

interface NotificationContainerPropsInterface {
  showDismisses: boolean;
  position:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"
    | "center-center";
  timeout: number;
  enterTimeout: number;
  leaveTimeout: number;
}

export type {
  NotificationDataArgsInterface,
  NotificationPropsInterface,
  NotificationContainerPropsInterface,
};
