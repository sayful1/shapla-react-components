import React from 'react'
import Button from "../dist/button.umd.js";

class App extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        First Testing page using React

        <Button>Click Me</Button>
      </div>
    )
  }
}

export {App}
export default App;
