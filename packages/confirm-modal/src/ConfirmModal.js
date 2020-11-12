import React from 'react'
import PropTypes from 'prop-types'
import Modal from "shapla-react-modal";
import Button from "shapla-react-button";
import Confirm from "./Confirm";

class ConfirmModal extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    confirmButtonClass: 'button button--confirm',
    cancelButtonClass: 'button button--cancel',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    confirmButtonClass: PropTypes.string,
    cancelButtonClass: PropTypes.string,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {
      params: {type: '', icon: '', title: '', message: 'Are you sure?', confirmButton: 'Ok', cancelButton: 'Cancel'},
      modalActive: false,
    }

    this.handleConfirmClick = this.handleConfirmClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.emitEvent = this.emitEvent.bind(this);
  }

  componentDidMount() {
    let defaultData = {
      type: '', icon: 'info', title: '', message: 'Are you sure?', confirmButton: 'Ok', cancelButton: 'Cancel'
    };
    Confirm.on('show', params => {
      this.setState(state => state.params = Object.assign(defaultData, params));
      this.setState(state => state.modalActive = true);
    })
  }

  /**
   * Render content
   *
   * @returns {JSX.Element|null}
   */
  render() {
    if (!this.state.modalActive) {
      return null;
    }

    return (
      <Modal type='box' active={this.state.modalActive} showCloseIcon={false} contentSize='small'
             className='shapla-modal--confirm'>
        <div className="shapla-confirm-modal">
          <div className="shapla-confirm-modal__content">
            {
              this.state.params.icon &&
              <div className='shapla-confirm-modal__icon'>
                <div className="shapla-confirm-modal__icon-content">!</div>
              </div>
            }
            {this.state.params.title && <h3 className="shapla-confirm-modal__title">{this.state.params.title}</h3>}
            {this.state.params.message &&
            <h3 className="shapla-confirm-modal__message">{this.state.params.message}</h3>}
          </div>
          <div className="shapla-confirm-modal__actions">
            {this.state.cancelButton &&
            <Button theme='default' onClick={this.handleCancelClick}>{this.state.cancelButton}</Button>}
            {this.state.confirmButton &&
            <Button theme='primary' onClick={this.handleConfirmClick}>{this.state.confirmButton}</Button>}
          </div>
        </div>
      </Modal>
    )
  }

  handleCancelClick(event) {
    this.emitEvent(event, false);
  }

  handleConfirmClick(event) {
    this.emitEvent(event, true);
  }

  emitEvent(event, status) {
    event.preventDefault();
    this.setState(state => state.modalActive = false);
    Confirm.emit('clicked', status);
  }
}

export {ConfirmModal}
export default ConfirmModal;
