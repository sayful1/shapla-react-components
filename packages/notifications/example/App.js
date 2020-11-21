import React from 'react'
import {NotificationContainer, Notify} from "../src";
import '../src/index.scss'
import 'shapla-css/src/components/_button.scss'
import 'shapla-css/src/spacing/_space-between.scss'

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
        <div className='space-x-4'>
          <button className='shapla-button' onClick={() => this.showNotification()}>Default Notification</button>
          <button className='shapla-button' onClick={() => this.showNotification('success')}>Success Notification
          </button>
          <button className='shapla-button' onClick={() => this.showNotification('info')}>Info Notification</button>
          <button className='shapla-button' onClick={() => this.showNotification('warning')}>Warning Notification
          </button>
          <button className='shapla-button' onClick={() => this.showNotification('error')}>Error Notification</button>
        </div>

        <NotificationContainer options={this.state.notification} position={this.state.position} timeout={3000}
                               enterTimeout={400} leaveTimeout={400}/>
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
