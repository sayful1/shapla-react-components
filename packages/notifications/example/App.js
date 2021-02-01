import React from 'react'
import {NotificationContainer, Notify} from "../src";
import '../src/index.scss'
import 'shapla-css/src/elements/button/button.scss'

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
      {label: 'Center (beta)', value: 'center-center'},
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
        title: 'Success!', timeout: 60000,
        message: 'This is success message. Self close after 1 minute.'
      });
    } else if ('info' === type) {
      Notify.info('This is info message.', 40000);
    } else if ('warning' === type) {
      Notify.warning({title: 'Warning!', message: 'This is warning message.', timeout: 40000});
    } else if ('error' === type) {
      Notify.error({title: 'Error!', message: 'This is error message.', timeout: 40000});
    } else {
      Notify.default('This is default message.', 'Title', 40000);
    }
  }
}

export {App}
export default App;
