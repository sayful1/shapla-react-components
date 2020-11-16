class Notify {
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
  static #dispatch(event, data) {
    document.dispatchEvent(new CustomEvent(event, {detail: data}));
  }

  /**
   * Get parameters
   *
   * @param {String|Object} message
   * @param {Object} params
   * @return {Object}
   */
  static #getParams(message, params = {}) {
    if (typeof message === 'string') {
      params.message = message;
    } else {
      params = message;
    }
    return params;
  }

  /**
   * Create notification
   *
   * @param message
   * @param params
   */
  static #create(message, params = {}) {
    let _params = Notify.#getParams(message, params);
    Notify.#dispatch('show.ShaplaReactNotification', _params);
  }

  /**
   * Create success notification
   *
   * @param args
   */
  static success(args = {}) {
    args.type = 'success';
    Notify.#create(args);
  }
}

export {Notify};
export default Notify;
