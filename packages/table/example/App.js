import React from 'react'
import Checkbox from "../src";
import '../src/index.scss'

class App extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        <p>First Testing page using React.</p>

        <Checkbox name='example_cb_1' id='example_cb_1' label='Check me' checked={true} disabled={true}
                  onChange={event => console.log(event.target.checked)}/>
      </div>
    )
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

export {App}
export default App;
