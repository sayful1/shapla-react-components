import React from 'react'
import {Notification, Notify} from "../src";
import '../src/index.scss'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {notification: {}, position: 'top-right'}

    setTimeout(() => {
      Notify.success({message: 'Show some Success Message.'});
    }, 1000);
  }

  render() {
    let positions = [
      {label: 'Top Left', value: 'top-left'},
      {label: 'Top Center', value: 'top-center'},
      {label: 'Top Right', value: 'top-right'},
      {label: 'Bottom Left', value: 'bottom-left'},
      {label: 'Bottom Center', value: 'bottom-center'},
      {label: 'Bottom Right', value: 'bottom-right'},
      {label: 'Center', value: 'center-center'},
    ];
    let positionHtml = positions.map(el =>
      <label key={el.value}>
        <input type="radio" value={el.value} checked={el.value === this.state.position}
               onChange={event => this.setState(state => state.position = event.target.value)}/>
        {el.label}
      </label>
    )
    return (
      <div className="stackonet-admin-app">

        <div>{positionHtml}</div>
        <p>&nbsp;</p>
        <div>
          <button onChange="showDefaultNotification">Show Default Notification</button>
          <button onChange="showSuccessNotification">Show Success Notification</button>
          <button onChange="showInfoNotification">Show Info Notification</button>
          <button onChange="showWarningNotification">Show Warning Notification</button>
          <button onChange="showErrorNotification">Show Error Notification</button>
        </div>

        <Notification options={this.state.notification} position={this.state.position}/>
      </div>
    )
  }
}

export {App}
export default App;
