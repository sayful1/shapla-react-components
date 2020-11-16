import React from 'react'
import {Notification, Notify} from "../src";
import '../src/index.scss'

class App extends React.Component {

  constructor(props) {
    super(props);

    setTimeout(() => {
      Notify.success({message: 'Show some Success Message.'});
    }, 1000);
  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <p>Shapla React Spinner</p>

        <Notification/>
      </div>
    )
  }
}

export {App}
export default App;
