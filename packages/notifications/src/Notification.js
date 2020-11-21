import React from 'react'
import PropTypes from 'prop-types';
import DeleteIcon from "shapla-react-delete-icon";

class Notification extends React.Component {

  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    type: 'info',
    title: '',
    message: '',
    showDismisses: true,
    timeout: 3000,
    onClick: () => {
    },
    onRequestHide: () => {
    }
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    type: PropTypes.oneOf(['primary', 'success', 'info', 'warning', 'error']),
    title: PropTypes.string,
    message: PropTypes.string,
    showDismisses: PropTypes.bool,
    timeout: PropTypes.number,
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.requestHide = this.requestHide.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  /**
   * Set timer on mount
   */
  componentDidMount() {
    if (this.props.timeout !== 0) {
      this.timer = setTimeout(this.requestHide, this.props.timeout);
    }
  }

  /**
   * Clear timer on unmount
   */
  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  /**
   * Handle item click
   */
  handleClick() {
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  /**
   * Request to hide notification
   */
  requestHide() {
    if (this.props.onRequestHide) {
      this.props.onRequestHide();
    }
  }

  /**
   * Render component UI
   */
  render() {
    return (
      <div className={this.itemClass()} onClick={this.handleClick}>
        {this.props.showDismisses && <DeleteIcon onClick={this.requestHide}/>}
        {this.props.title && <div className="shapla-notification__title">{this.props.title}</div>}
        <div className="shapla-notification__title">{this.props.message}</div>
      </div>
    )
  }

  /**
   * Get item CSS classes
   *
   * @returns {string}
   */
  itemClass() {
    let classes = ['shapla-notification__item'];
    if (-1 !== ['primary', 'success', 'info', 'warning', 'error'].indexOf(this.props.type)) {
      classes.push(`has-${this.props.type}`);
    }
    return classes.join(' ');
  }
}

export {Notification};
export default Notification;
