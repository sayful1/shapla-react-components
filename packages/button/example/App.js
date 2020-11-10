import React from 'react'
import Button from "../src";
import '../src/index.scss'

class App extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        <p>First Testing page using React.</p>

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
