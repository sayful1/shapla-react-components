import React from 'react'
import {DeleteIcon} from "../../src/index";


class DeleteIconExample extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">
        <p className='mb-4'>Simple delete icon</p>
        <div className="flex space-x-4">
          <DeleteIcon size='small' onClick={this.handleClick}>Click Me</DeleteIcon>
          <DeleteIcon size='normal' onClick={this.handleClick}>Click Me</DeleteIcon>
          <DeleteIcon size='medium' onClick={this.handleClick}>Click Me</DeleteIcon>
          <DeleteIcon size='large' onClick={this.handleClick}>Click Me</DeleteIcon>
        </div>
      </div>
    )
  }

  handleClick() {
    console.log('Button clicked!');
  }
}

export {DeleteIconExample}
export default DeleteIconExample;
