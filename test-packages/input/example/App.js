import React from 'react'
import Input from "../src";
import '../src/index.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'sayful@stackonet.com',
      name: 'Md. Sayful Islam',
      date: '',
      time: '',
      datetime: '',
    }
  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-4-tablet">
            <Input name='name' id='name' label='Full Name'/>
          </div>
          <div className="shapla-column is-4-tablet">
            <Input name='name' id='name' label='Full Name' helpText="Some help text"/>
          </div>
          <div className="shapla-column is-4-tablet">
            <Input name='name' id='name' label='Full Name' value="Md. Sayful Islam" hasSuccess={true}
                   onChange={event => this.setState(state => state.name = event.target.value)}/>
          </div>
          <div className="shapla-column is-4-tablet">
            <Input name='name' id='name' label='Full Name' value={this.state.email}
                   validationText="Please enter a valid full name" hasError={true}
                   onChange={event => this.setState(state => state.email = event.target.value)}/>
          </div>
        </div>
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-4-tablet">
            <Input type='date' name='date' id='date' label='Date Field' value={this.state.date}
                   onChange={event => this.setState(state => state.date = event.target.value)}/>
          </div>
          <div className="shapla-column is-4-tablet">
            <Input type='time' name='time' id='time' label='Time Field' value={this.state.time}
                   onChange={event => this.setState(state => state.time = event.target.value)}/>
          </div>
          <div className="shapla-column is-4-tablet">
            <Input type='datetime-local' name='datetime' id='datetime' label='Date Time Field'
                   value={this.state.datetime}
                   onChange={event => this.setState(state => state.datetime = event.target.value)}/>
          </div>
        </div>
        <div className="shapla-columns is-multiline">
          <div className="shapla-column is-4-tablet">
            <Input type='textarea' name='name' id='name' label='Full Name' helpText="Some help text"/>
          </div>
        </div>
      </div>
    )
  }
}

export {App}
export default App;
