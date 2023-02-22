import { ConfirmDataInterface } from "./interfaces";

class Dialog {
  /**
   * Listen event
   *
   * @param event
   * @param callback
   */
  static on(
    event: string,
    callback:
      | ((args: ConfirmDataInterface) => void)
      | ((confirmed: boolean) => void)
  ) {
    document.addEventListener(event, ((e: CustomEvent) =>
      callback(e.detail)) as EventListener);
  }

  /**
   * Dispatch event
   *
   * @param event
   * @param data
   */
  static dispatch(event: string, data: boolean | ConfirmDataInterface) {
    document.dispatchEvent(
      new CustomEvent<boolean | ConfirmDataInterface>(event, { detail: data })
    );
  }

  /**
   * Show dialog
   *
   * @param {Object} params
   */
  static show(params = {}) {
    Dialog.dispatch("show.ShaplaReactConfirmModal", params);
  }

  /**
   * Get parameters
   *
   * @param {String|Object} message
   * @param {Object} params
   * @return {Object}
   */
  static getParams(
    message: string | ConfirmDataInterface,
    params: ConfirmDataInterface = {}
  ): ConfirmDataInterface {
    if (typeof message === "string") {
      params.message = message;
    } else {
      params = message;
    }

    return Object.assign(
      {
        icon: "primary",
        title: "",
        message: "Are you sure?",
        confirmButton: "OK",
        cancelButton: "Cancel",
      },
      params
    );
  }

  /**
   * Show confirm dialog
   *
   * @param {String|Object} message
   * @param {Object} params
   * @returns {Promise}
   */
  static confirm(
    message: ConfirmDataInterface | string,
    params: ConfirmDataInterface = {}
  ) {
    const _params = this.getParams(message, params);
    _params.type = "confirm";

    return new Promise((resolve) => {
      this.show(_params);

      Dialog.on("click.ShaplaReactConfirmModal", (confirmed: boolean) =>
        resolve(confirmed)
      );
    });
  }

  /**
   * Show alert dialog
   *
   * @param message
   * @param params
   */
  static alert(
    message: string | ConfirmDataInterface,
    params: ConfirmDataInterface = {}
  ) {
    const _params: ConfirmDataInterface = this.getParams(message, params);
    _params.type = "alert";
    _params.cancelButton = false;
    this.show(_params);
  }
}

export default Dialog;
