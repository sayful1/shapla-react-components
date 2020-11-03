import React from 'react'
import Button from "../src";

class App extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        First Testing page using React

        <Button theme='primary' onClick={this.handleClick}>Click Me</Button>
      </div>
    )
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

export {App}
export default App;
