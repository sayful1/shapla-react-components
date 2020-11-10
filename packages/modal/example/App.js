import React from 'react'
import Modal from "../src";
import '../src/index.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    }

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      active: false
    });
  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <p>First Testing page using React.</p>

        <Modal
          active={this.state.active}
          closeOnBackgroundClick={false}
          type='card'
          onClose={this.closeModal}
          footer={<button>Save</button>}
        >
          Some Modal Content
        </Modal>
      </div>
    )
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

export {App}
export default App;
