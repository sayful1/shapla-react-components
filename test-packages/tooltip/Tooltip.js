class Tooltip {
  constructor(element, config = {}) {
    this.element = element;
    this.forElement = null;
    this.config = Object.assign({theme: 'dark', defaultPosition: 'bottom'}, config);

    this.cssClasses = {
      IS_ACTIVE: 'is-active',
      MAIN: 'shapla-tooltip',
      BOTTOM: 'shapla-tooltip--bottom',
      LEFT: 'shapla-tooltip--left',
      RIGHT: 'shapla-tooltip--right',
      TOP: 'shapla-tooltip--top'
    };

    // Initialize instance.
    this.init();
  }

  /**
   * Handle mouseenter for tooltip.
   *
   * @param {Event} event The event that fired.
   * @private
   */
  show(event) {
    this.calculatePosition(event);

    this.element.classList.add(this.cssClasses.IS_ACTIVE);
  }

  /**
   * Hide tooltip on mouseleave or scroll
   *
   * @private
   */
  hide() {
    this.element.classList.remove(this.cssClasses.IS_ACTIVE);
  }

  /**
   * Calculate tooltip position
   *
   * @param {Event} event
   */
  calculatePosition(event) {
    let props = event.target.getBoundingClientRect();
    let left = props.left + (props.width / 2);
    let top = props.top + (props.height / 2);
    let marginLeft = -1 * (this.element.offsetWidth / 2);
    let marginTop = -1 * (this.element.offsetHeight / 2);

    if (this.element.classList.contains(this.cssClasses.LEFT) || this.element.classList.contains(this.cssClasses.RIGHT)) {
      if (top + marginTop < 0) {
        this.element.style.top = '0';
        this.element.style.marginTop = '0';
      } else {
        this.element.style.top = top + 'px';
        this.element.style.marginTop = marginTop + 'px';
      }
    } else {
      if (left + marginLeft < 0) {
        this.element.style.left = '0';
        this.element.style.marginLeft = '0';
      } else {
        this.element.style.left = left + 'px';
        this.element.style.marginLeft = marginLeft + 'px';
      }
    }

    if (this.element.classList.contains(this.cssClasses.TOP)) {
      this.element.style.top = props.top - this.element.offsetHeight - 10 + 'px';
    } else if (this.element.classList.contains(this.cssClasses.RIGHT)) {
      this.element.style.left = props.left + props.width + 10 + 'px';
    } else if (this.element.classList.contains(this.cssClasses.LEFT)) {
      this.element.style.left = props.left - this.element.offsetWidth - 10 + 'px';
    } else {
      this.element.style.top = props.top + props.height + 10 + 'px';
    }
  }

  /**
   * Initialize element.
   */
  init() {
    if (!this.element) {
      return;
    }

    this.createForElementIfNotExist();

    if (this.forElement) {
      // It's left here because it prevents accidental text selection on Android
      if (!this.forElement.hasAttribute('tabindex')) {
        this.forElement.setAttribute('tabindex', '0');
      }

      // Show tooltip
      this.boundMouseEnterHandler = this.show.bind(this);
      this.forElement.addEventListener('mouseenter', this.boundMouseEnterHandler, false);
      this.forElement.addEventListener('touchend', this.boundMouseEnterHandler, false);

      // Close tooltip
      this.boundMouseLeaveAndScrollHandler = this.hide.bind(this);
      this.forElement.addEventListener('mouseleave', this.boundMouseLeaveAndScrollHandler, false);
      window.addEventListener('scroll', this.boundMouseLeaveAndScrollHandler, true);
      window.addEventListener('touchstart', this.boundMouseLeaveAndScrollHandler);
    }
  }

  /**
   * Create for element if not exists
   */
  createForElementIfNotExist() {
    let forElId = this.element.getAttribute('data-tooltip-for'),
      forEl = forElId ? document.getElementById(forElId) : false;

    if (forEl) {
      this.forElement = forEl;
    } else {
      let content = this.element.getAttribute('data-tooltip'),
        uuid = Tooltip.createUUID();

      let cElement = document.createElement("div");
      cElement.classList.add(this.cssClasses.MAIN);
      cElement.classList.add(`is-${this.config.theme}`);
      cElement.setAttribute('data-tooltip-for', uuid);
      cElement.setAttribute('tabindex', '0');
      cElement.innerText = content;
      document.body.appendChild(cElement);

      this.forElement = this.element;
      this.forElement.setAttribute('data-tooltip-target', uuid);
      this.forElement.removeAttribute('data-tooltip');
      this.element = cElement;
    }
  }

  /**
   * Create UUID
   *
   * @returns {string}
   */
  static createUUID() {
    const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : ((r & 0x3) | 0x8);
      return v.toString(16);
    });
  }

  /**
   * Register automatically
   */
  static register() {
    let elements = document.querySelectorAll("[data-tooltip-for], [data-tooltip]");
    if (elements.length) {
      elements.forEach(element => new Tooltip(element));
    }
  }
}

export {Tooltip}
export default Tooltip;
