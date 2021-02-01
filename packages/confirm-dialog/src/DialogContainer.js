import React from 'react'
import PropTypes from 'prop-types'
import Modal from "@shapla/react-modal";
import Button from "@shapla/react-button";
import Dialog from "./Dialog";

class DialogContainer extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    icon: 'primary',
    message: 'Are you sure?',
    confirmButtonText: 'Ok',
    cancelButtonText: 'Cancel',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    icon: PropTypes.oneOf(['primary', 'success', 'error']),
    message: PropTypes.string,
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      params: {icon: 'info', title: '', message: 'Are you sure?', confirmButton: 'OK', cancelButton: 'Cancel'},
      modalActive: false,
    }

    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.emitEvent = this.emitEvent.bind(this);
  }

  componentDidMount() {
    Dialog.on('show.ShaplaReactConfirmModal', newParams => {
      this.setState(state => state.params = Object.assign(this.defaultParamsData(), newParams));
      this.setState(state => state.modalActive = true);
    })
  }

  /**
   * Render content
   *
   * @returns {JSX.Element|null}
   */
  render() {
    return (
      <Modal type='confirm' active={this.state.modalActive} showCloseIcon={false} contentSize='small'>
        <div className="shapla-modal-confirm__content">
          {
            this.state.params.icon &&
            <div className={this.iconClass()}>
              <div className="shapla-modal-confirm__icon-content">!</div>
            </div>
          }
          {
            this.state.params.title &&
            <h3 className="shapla-modal-confirm__title">{this.state.params.title}</h3>
          }
          {
            this.state.params.message &&
            <div className="shapla-modal-confirm__message">{this.state.params.message}</div>
          }
        </div>
        <div className="shapla-modal-confirm__actions">
          {this.state.cancelButton &&
          <Button theme='default' onClick={this.handleCancelClick}>{this.state.cancelButton}</Button>}
          {this.state.confirmButton &&
          <Button theme='primary' onClick={this.handleConfirmClick}>{this.state.confirmButton}</Button>}
        </div>
      </Modal>
    )
  }

  /**
   * Icon class
   *
   * @returns {string}
   */
  iconClass() {
    return ['shapla-modal-confirm__icon', `is-${this.state.params.icon}`].join(' ');
  }

  /**
   * Handle cancel click
   *
   * @param {Event} event
   */
  handleCancelClick(event) {
    this.emitEvent(event, false);
  }

  /**
   * Handle Confirm click
   *
   * @param {Event} event
   */
  handleConfirmClick(event) {
    this.emitEvent(event, true);
  }

  /**
   * Emit event
   *
   * @param {Event} event
   * @param {Boolean}status
   */
  emitEvent(event, status) {
    event.preventDefault();
    this.setState(state => state.modalActive = false);
    Dialog.dispatch('click.ShaplaReactConfirmModal', status);
  }

  /**
   * Get default parameters
   *
   * @returns { {
   * icon: string,
   * title: string,
   * message: string,
   * confirmButton: string,
   * cancelButton: string
   * } }
   */
  defaultParamsData() {
    return {
      icon: 'primary', // Also can be `success` or `error`
      title: '',
      message: 'Are you sure?',
      confirmButton: 'OK',
      cancelButton: 'Cancel'
    }
  }
}

export {DialogContainer}
export default DialogContainer;
