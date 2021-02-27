import React from 'react'
import {Dropdown} from "../src";
import '../src/index.scss'
import './style.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stackonet-admin-app p-8">
        <Dropdown trigger={<button>From Left: Click</button>} hoverable={false}>
          <a href="https://example.com" className="shapla-dropdown-item is-link is-active">Link 1</a>
          <a href="https://example.com" className="shapla-dropdown-item is-link">Link 2</a>
          <span className="shapla-dropdown-divider"></span>
          <a href="https://example.com" className="shapla-dropdown-item is-link">Link 3</a>
          <a href="https://example.com" className="shapla-dropdown-item is-link">Link 4</a>
        </Dropdown>
        <Dropdown trigger={<button>From Right: Hover</button>} hoverable={true} right={true}>
          <a href="https://example.com" className="shapla-dropdown-item is-link is-active">Link 1</a>
          <a href="https://example.com" className="shapla-dropdown-item is-link">Link 2</a>
          <span className="shapla-dropdown-divider"></span>
          <a href="https://example.com" className="shapla-dropdown-item is-link">Link 3</a>
          <a href="https://example.com" className="shapla-dropdown-item is-link">Link 4</a>
        </Dropdown>
        <div>
          <Dropdown trigger={<button>From Bottom to Top: Click</button>} hoverable={false} direction='up'>
            <a href="https://example.com" className="shapla-dropdown-item is-link is-active">Link 1</a>
            <a href="https://example.com" className="shapla-dropdown-item is-link">Link 2</a>
            <span className="shapla-dropdown-divider"></span>
            <a href="https://example.com" className="shapla-dropdown-item is-link">Link 3</a>
            <a href="https://example.com" className="shapla-dropdown-item is-link">Link 4</a>
          </Dropdown>
        </div>
        <div>
          <Dropdown trigger={<button>Auto direction: Click</button>} hoverable={false}>
            <a href="https://example.com" className="shapla-dropdown-item is-link is-active">Link 1</a>
            <a href="https://example.com" className="shapla-dropdown-item is-link">Link 2</a>
            <span className="shapla-dropdown-divider"></span>
            <a href="https://example.com" className="shapla-dropdown-item is-link">Link 3</a>
            <a href="https://example.com" className="shapla-dropdown-item is-link">Link 4</a>
          </Dropdown>
        </div>
      </div>
    )
  }
}

export {App}
export default App;
