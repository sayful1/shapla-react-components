import React from 'react'
import PropTypes from 'prop-types';
import {CSSTransition, TransitionGroup} from 'react-transition-group/dist/react-transition-group.js';
import Notify from "./Notify";
import Notification from "./Notification";

class Notifications extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    options: {},
    timeout: 2750,
    showDismisses: true,
    position: 'top-right'
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    options: PropTypes.object,
    timeout: PropTypes.number,
    showDismisses: PropTypes.bool,
    position: PropTypes.oneOf(
      ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right', 'center-center']
    ),
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {items: [], itemsCounts: 0};

    this.show = this.show.bind(this);
  }

  /**
   * Called immediately after a component is mounted.
   * Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    if (this.props.options && this.props.options.message) {
      this.show(this.props.options);
    }

    Notify.on(newParams => this.show(newParams))
  }

  /**
   * @param prevProps
   */
  componentDidUpdate(prevProps) {
    if (this.props.options !== prevProps.options) {
      this.show(this.props.options);
    }
  }

  /**
   * Render component UI
   */
  render() {
    if (!this.state.items.length) {
      return null;
    }

    let items = this.state.items.map((item, index) =>
      <CSSTransition key={index} classNames="notification" timeout={{enter: 300, exit: 300}}>
        <Notification key={item.id} type={item.type} title={item.title} message={item.message}
                      showDismisses={this.props.showDismisses} onRequestHide={() => this.closeItem(item)}/>
      </CSSTransition>
    );

    return (
      <div className={this.containerClass()}>
        <TransitionGroup>
          {items}
        </TransitionGroup>
      </div>
    )
  }

  /**
   * Get CSS classes
   *
   * @returns {string}
   */
  containerClass() {
    let position = this.props.position.split('-');
    return [
      'shapla-notification',
      'shapla-notification--' + this.props.position,
      'is-position-' + position[0],
      'is-align-' + position[1],
    ].join(' ');
  }

  /**
   * Show notification
   *
   * @param {object} options
   */
  show(options = {}) {
    if (!(options && options.message)) {
      return;
    }

    let items = this.state.items, itemsCounts = this.state.itemsCounts || 0;

    this.setState(state => state.itemsCounts = itemsCounts + 1);

    options.id = this.state.itemsCounts;
    let position = this.props.position.split('-');
    if (position[0] === 'bottom') {
      items.push(options);
    } else {
      items.unshift(options);
    }
    this.setState(state => state.items = items);

    let timeout = (options.timeout && typeof options.timeout === "number") ? options.timeout : this.props.timeout;
    setTimeout(() => this.closeItem(options), timeout);
  }

  /**
   * Close item
   *
   * @param options
   */
  closeItem(options) {
    let items = this.state.items;
    items.splice(items.indexOf(options), 1);
    this.setState(state => state.items = items);
  }
}

export {Notifications}
export default Notifications;
