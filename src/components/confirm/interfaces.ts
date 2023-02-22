interface ConfirmDataInterface {
  message?: string;
  title?: string;
  type?: "alert" | "confirm";
  icon?: string | "primary" | "success" | "error";
  confirmButton?: string | boolean;
  cancelButton?: string | boolean;
}

interface DialogContainerPropsInterface {
  icon: "primary" | "success" | "error";
  message: string;
  confirmButtonText: string;
  cancelButtonText: string;
}

interface DialogContainerStateInterface {
  params: ConfirmDataInterface;
  modalActive: boolean;
}

export type {
  ConfirmDataInterface,
  DialogContainerPropsInterface,
  DialogContainerStateInterface,
};
