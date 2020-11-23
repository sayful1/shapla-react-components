import React from 'react'
import Button from "shapla-react-button";
import 'shapla-react-button/src/index.scss'

class ButtonExample extends React.Component {
  render() {
    return (
      <div>
        <Button theme='primary' onClick={this.handleClick}>Click Me</Button>
      </div>
    )
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

export {ButtonExample}
export default ButtonExample;
