import React from 'react'
import Spinner from "../src";
import '../src/_spinner.scss'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      active: true
    }

    setTimeout(() => {
      this.setState(state => state.active = false);
    }, 3000);

  }

  render() {
    return (
      <div className="stackonet-admin-app">
        <p>First Testing page using React.</p>

        <Spinner active={this.state.active} single={true} showText={true}/>
      </div>
    )
  }
}

export {App}
export default App;
