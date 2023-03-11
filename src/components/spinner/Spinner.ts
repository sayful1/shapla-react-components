class Spinner {
  /**
   * Activate spinner
   */
  static show() {
    Spinner.dispatch(true);
  }

  /**
   * Deactivate spinner
   */
  static hide() {
    Spinner.dispatch(false);
  }

  /**
   * Listen event
   *
   * @param callback
   */
  static on(
    callback: EventListener | ((options: { active: boolean }) => void)
  ) {
    document.addEventListener("show.ShaplaReactSpinner", ((e: CustomEvent) =>
      callback(e.detail)) as EventListener);
  }

  /**
   * Dispatch event
   *
   * @param {boolean} isActive
   */
  static dispatch(isActive: boolean) {
    document.dispatchEvent(
      new CustomEvent("show.ShaplaReactSpinner", {
        detail: { active: isActive },
      })
    );
  }
}

export default Spinner;
