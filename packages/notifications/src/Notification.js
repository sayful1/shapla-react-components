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
    onClick: PropTypes.func,
    onRequestHide: PropTypes.func,
  }

  /**
   * Render component UI
   */
  render() {
    return (
      <div className={this.itemClass()} onClick={this.props.onClick}>
        {this.props.showDismisses && <DeleteIcon onClick={this.props.onRequestHide}/>}
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
