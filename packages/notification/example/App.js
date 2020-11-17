import React from 'react'
import {Notifications, Notify} from "../src";
import '../src/index.scss'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {notification: {}, position: 'top-right'}
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
          <button onClick={() => this.showNotification()}>Show Default Notification</button>
          <button onClick={() => this.showNotification('success')}>Show Success Notification</button>
          <button onClick={() => this.showNotification('info')}>Show Info Notification</button>
          <button onClick={() => this.showNotification('warning')}>Show Warning Notification</button>
          <button onClick={() => this.showNotification('error')}>Show Error Notification</button>
        </div>

        <Notifications options={this.state.notification} position={this.state.position}/>
      </div>
    )
  }

  showNotification(type = 'default') {
    if ('success' === type) {
      Notify.success({
        type: 'success', title: 'Success!', timeout: 60000,
        message: 'This is success message. Self close after 1 minute.'
      });
    } else if ('info' === type) {
      Notify.info({type: 'info', title: 'Info!', message: 'This is info message.'});
    } else if ('warning' === type) {
      Notify.warning({type: 'warning', title: 'Warning!', message: 'This is warning message.'});
    } else if ('error' === type) {
      Notify.error({type: 'error', title: 'Error!', message: 'This is error message.'});
    } else {
      Notify.default('This is default message.')
    }
  }
}

export {App}
export default App;
