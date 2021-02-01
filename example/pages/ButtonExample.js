import React from 'react'
import {Button} from "../../src/index";

class ButtonExample extends React.Component {
  render() {
    return (
      <div>
        <div className='space-x-4 my-4'>
          <Button>Default</Button>
          <Button outline={true}>Default Outline</Button>
        </div>
        <div className='space-x-4 my-4'>
          <Button theme='primary'>Primary</Button>
          <Button theme='primary' outline={true}>Primary Outline</Button>
        </div>
        <div className='space-x-4 my-4'>
          <Button theme='secondary'>Secondary</Button>
          <Button theme='secondary' outline={true}>Secondary Outline</Button>
        </div>
      </div>
    )
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

export {ButtonExample}
export default ButtonExample;
