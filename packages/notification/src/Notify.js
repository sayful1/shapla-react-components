class Notify {
  /**
   * Listen event
   *
   * @param callback
   */
  static on(callback) {
    document.addEventListener('show.ShaplaReactNotification', e => callback(e.detail));
  }

  /**
   * Dispatch event
   *
   * @param data
   */
  static dispatch(data) {
    document.dispatchEvent(new CustomEvent('show.ShaplaReactNotification', {detail: data}));
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
    Notify.dispatch(Notify.#getParams(message, params));
  }

  /**
   * Create primary notification
   *
   * @param message
   * @param params
   */
  static primary(message, params = {}) {
    let _params = Notify.#getParams(message, params);
    _params.type = 'primary';
    Notify.#create(_params);
  }

  /**
   * Create primary notification
   *
   * @param message
   * @param params
   */
  static default(message, params = {}) {
    Notify.primary(message, params);
  }

  /**
   * Create success notification
   *
   * @param message
   * @param params
   */
  static success(message, params = {}) {
    let _params = Notify.#getParams(message, params);
    _params.type = 'success';
    Notify.#create(_params);
  }

  /**
   * Create info notification
   *
   * @param message
   * @param params
   */
  static info(message, params = {}) {
    let _params = Notify.#getParams(message, params);
    _params.type = 'info';
    Notify.#create(_params);
  }

  /**
   * Create warning notification
   *
   * @param message
   * @param params
   */
  static warning(message, params = {}) {
    let _params = Notify.#getParams(message, params);
    _params.type = 'warning';
    Notify.#create(_params);
  }

  /**
   * Create warning notification
   *
   * @param message
   * @param params
   */
  static error(message, params = {}) {
    let _params = Notify.#getParams(message, params);
    _params.type = 'error';
    Notify.#create(_params);
  }
}

export {Notify};
export default Notify;
