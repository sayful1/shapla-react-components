import React from 'react'
import {ConfirmModal, Confirm} from "../src";
import '../src/index.scss'
import 'shapla-css/src/shapla.scss'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.openBoxModal = this.openBoxModal.bind(this);
  }

  openBoxModal() {
    Confirm.confirm({message: 'Are you sure?'}).then(confirm => {
      if (confirm) {
        console.log('Confirmed');
      }
    });
  }

  render() {
    return (
      <div className="stackonet-admin-app p-8">

        <div>
          <button className='shapla-button m-2' onClick={this.openBoxModal}>Open Box Modal</button>
        </div>

        <ConfirmModal/>

      </div>
    )
  }
}

export {App}
export default App;
