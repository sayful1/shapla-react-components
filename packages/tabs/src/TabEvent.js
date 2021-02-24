class TabEvent {
  /**
   * Listen event
   *
   * @param event
   * @param callback
   */
  static on(event, callback) {
    document.addEventListener(event, (e) => callback(e.detail));
  }

  /**
   * Dispatch event
   *
   * @param event
   * @param data
   */
  static dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, {detail: data}));
  }
}

export {TabEvent}
export default TabEvent;
