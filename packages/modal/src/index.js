/*!
 * Shapla Modal v1.0.0
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

import React from 'react'
import PropTypes from 'prop-types'
import DeleteIcon from 'shapla-react-delete-icon';

class Modal extends React.Component {

  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    active: false,
    title: 'Untitled',
    type: 'card', // Also support 'box' design
    closeOnBackgroundClick: true,
    showCloseIcon: true,
    contentSize: 'medium',
    onClose: () => {
    },
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
    closeOnBackgroundClick: PropTypes.bool,
    showCloseIcon: PropTypes.bool,
    contentSize: PropTypes.oneOf(['small', 'medium', 'large', 'full']),
    onClose: PropTypes.func,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
    this.backgroundClick = this.backgroundClick.bind(this);
  }

  render() {
    if (!this.props.active) {
      return null;
    }
    if (!this.is_card()) {
      return (
        <div className='shapla-modal is-active'>
          <div className="shapla-modal-background" onClick={this.backgroundClick()}/>
          <div className={this.contentClass()}>{this.props.children}</div>
          {this.props.showCloseIcon && <DeleteIcon size='large' fixed={true} onClick={this.props.onClose}/>}
        </div>
      )
    }
    return (
      <div>
        <DeleteIcon/>
      </div>
    )
  }

  contentClass() {
    let classes = [
      `is-${this.props.contentSize}`,
      `shapla-modal-content--${this.props.type}`
    ];

    if (this.is_card()) {
      classes.push('shapla-modal-card')
    } else {
      classes.push('shapla-modal-content')
    }
    return classes.join(' ');
  }

  /**
   * Check if type is card
   *
   * @returns {boolean}
   */
  is_card() {
    return this.props.type === 'card';
  }

  close() {
    return this.props.onClick;
  }

  backgroundClick() {
    if (this.props.closeOnBackgroundClick) {
      this.close();
    }
  }

  /**
   * Refresh body class
   *
   * @param active
   */
  refreshBodyClass(active) {
    let body = document.querySelector('body');
    if (active) {
      body.classList.add('has-shapla-modal');
    } else {
      setTimeout(() => {
        if (document.querySelectorAll('.shapla-modal.is-active').length === 0) {
          body.classList.remove('has-shapla-modal');
        }
      }, 50);
    }
  }
}

export {Modal}
export default Modal;
