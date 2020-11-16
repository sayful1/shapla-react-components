import React from 'react'
import PropTypes from 'prop-types';
import DeleteIcon from "shapla-react-delete-icon";
import {CSSTransitionGroup} from 'react-transition-group'
import Notify from "./Notify";

class Notification extends React.Component {
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

    Notify.on('show.ShaplaReactNotification', newParams => this.show(newParams))
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

    let items = this.state.items.map(item =>
      <div className={this.itemClass(item)} key={item.id}>
        {this.props.showDismisses && <DeleteIcon onClick={() => this.closeItem(item)}/>}
        {item.title && <div className="shapla-notification__title">{item.title}</div>}
        <div className="shapla-notification__title">{item.message}</div>
      </div>
    );

    return (
      <div className={this.containerClass()}>
        <CSSTransitionGroup transitionName="shapla-notification-transition" transitionEnterTimeout={500}
                            transitionLeaveTimeout={300}>{items}</CSSTransitionGroup>
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
   * Get item CSS classes
   *
   * @param {object} item
   * @returns {string}
   */
  itemClass(item) {
    let classes = ['shapla-notification__item'];
    if (-1 !== ['success', 'info', 'warning', 'error'].indexOf(item.type)) {
      classes.push(`has-${item.type}`);
    }
    return classes.join(' ');
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

export {Notification}
export default Notification;
