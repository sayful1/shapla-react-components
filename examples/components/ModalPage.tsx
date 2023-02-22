import React from "react";
import Modal from "../src";
import "../src/index.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showBoxModal: false,
      showCardModal: false,
      showSmallCardModal: false,
      showLargeCardModal: false,
      showFullCardModal: false,
    };

    this.openBoxModal = this.openBoxModal.bind(this);
    this.closeBoxModal = this.closeBoxModal.bind(this);
    this.openCardModal = this.openCardModal.bind(this);
    this.closeCardModal = this.closeCardModal.bind(this);
    this.openSmallCardModal = this.openSmallCardModal.bind(this);
    this.closeSmallCardModal = this.closeSmallCardModal.bind(this);
    this.openLargeCardModal = this.openLargeCardModal.bind(this);
    this.closeLargeCardModal = this.closeLargeCardModal.bind(this);
    this.openFullCardModal = this.openFullCardModal.bind(this);
    this.closeFullCardModal = this.closeFullCardModal.bind(this);
  }

  openBoxModal() {
    this.setState((state) => (state.showBoxModal = true));
  }

  closeBoxModal() {
    this.setState((state) => (state.showBoxModal = false));
  }

  openCardModal() {
    this.setState((state) => (state.showCardModal = true));
  }

  closeCardModal() {
    this.setState((state) => (state.showCardModal = false));
  }

  openSmallCardModal() {
    this.setState((state) => (state.showSmallCardModal = true));
  }

  closeSmallCardModal() {
    this.setState((state) => (state.showSmallCardModal = false));
  }

  openLargeCardModal() {
    this.setState((state) => (state.showLargeCardModal = true));
  }

  closeLargeCardModal() {
    this.setState((state) => (state.showLargeCardModal = false));
  }

  openFullCardModal() {
    this.setState((state) => (state.showFullCardModal = true));
  }

  closeFullCardModal() {
    this.setState((state) => (state.showFullCardModal = false));
  }

  render() {
    return (
      <div className="stackonet-admin-app p-8">
        <div>
          <button className="shapla-button m-2" onClick={this.openBoxModal}>
            Open Box Modal
          </button>
          <button className="shapla-button m-2" onClick={this.openCardModal}>
            Open Card Modal
          </button>
          <button
            className="shapla-button m-2"
            onClick={this.openSmallCardModal}
          >
            Open Small Card Modal
          </button>
          <button
            className="shapla-button m-2"
            onClick={this.openLargeCardModal}
          >
            Open Large Card Modal
          </button>
          <button
            className="shapla-button m-2"
            onClick={this.openFullCardModal}
          >
            Open Full Card Modal
          </button>
        </div>

        <Modal
          active={this.state.showBoxModal}
          type="box"
          onClose={this.closeBoxModal}
        >
          Box modal only have white background, border radius and 1rem padding
        </Modal>

        <Modal
          active={this.state.showCardModal}
          type="card"
          onClose={this.closeCardModal}
          title="Card Modal Demo 1"
        >
          Medium width modal.
        </Modal>

        <Modal
          active={this.state.showSmallCardModal}
          type="card"
          onClose={this.closeSmallCardModal}
          title="Card Modal Demo 2"
          contentSize="small"
        >
          Small width modal.
        </Modal>

        <Modal
          active={this.state.showLargeCardModal}
          type="card"
          onClose={this.closeLargeCardModal}
          title="Card Modal Demo 3"
          contentSize="large"
        >
          Large width modal.
        </Modal>

        <Modal
          active={this.state.showFullCardModal}
          type="card"
          onClose={this.closeFullCardModal}
          title="Card Modal Demo 4"
          contentSize="full"
          className="custom-class"
          footer={
            <div>
              <button
                className="shapla-button is-primary is-outline"
                onClick={this.closeFullCardModal}
              >
                Close
              </button>
              <button className="shapla-button is-primary">Save</button>
            </div>
          }
        >
          Full width modal.
        </Modal>
      </div>
    );
  }
}

export { App };
export default App;
