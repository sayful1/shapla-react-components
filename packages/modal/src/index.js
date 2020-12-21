/*!
 * Shapla React Modal v1.0.2
 * (c) 2020 Sayful Islam
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
    className: '',
    title: 'Untitled',
    type: 'card', // Also support 'box' design
    closeOnBackgroundClick: true,
    showCloseIcon: true,
    contentSize: 'medium',
    children: '',
    footer: '',
    onClose: () => {
    },
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    className: PropTypes.string,
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
  }

  /**
   * Called immediately after a component is mounted.
   * Setting state here will trigger re-rendering.
   */
  componentDidMount() {
    this.refreshBodyClass(this.props.active);
  }

  /**
   * @param prevProps
   */
  componentDidUpdate(prevProps) {
    if (this.props.active !== prevProps.active) {
      this.refreshBodyClass(this.props.active);
    }
  }

  /**
   * Render content
   *
   * @returns {JSX.Element|null}
   */
  render() {
    if (!this.props.active) {
      return null;
    }

    if (!this.is_card()) {
      return (
        <div className={this.modalClass()}>
          {
            this.props.closeOnBackgroundClick ?
              <div className="shapla-modal-background" onClick={this.props.onClose}/> :
              <div className="shapla-modal-background"/>
          }
          <div className={this.contentClass()}>{this.props.children}</div>
          {this.props.showCloseIcon && <DeleteIcon size='large' fixed={true} onClick={this.props.onClose}/>}
        </div>
      )
    }

    return (
      <div className={this.modalClass()}>
        {
          this.props.closeOnBackgroundClick ?
            <div className="shapla-modal-background" onClick={this.props.onClose}/> :
            <div className="shapla-modal-background"/>
        }
        <div className={this.contentClass()}>
          <div className="shapla-modal-card-head">
            <p className="shapla-modal-card-title">{this.props.title}</p>
            {this.props.showCloseIcon && <DeleteIcon onClick={this.props.onClose}/>}
          </div>
          <div className="shapla-modal-card-body">
            {this.props.children}
          </div>
          <div className="shapla-modal-card-foot is-pulled-right">
            {this.props.footer || <button className="shapla-button" onClick={this.props.onClose}>Cancel</button>}
          </div>
        </div>
      </div>
    )
  }

  modalClass() {
    let classes = ['shapla-modal', 'is-active', `shapla-modal--${this.props.type}`];
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return classes.join(' ');
  }

  /**
   * Content class
   *
   * @returns {string}
   */
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
