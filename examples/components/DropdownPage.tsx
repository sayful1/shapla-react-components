import React from "react";
import { Dropdown } from "../../src/index";

class DropdownPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="stackonet-admin-app p-8">
        <div className="p-8">
          <Dropdown
            trigger={
              <button className="shapla-button">From Left: Click</button>
            }
            hoverable={false}
          >
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link is-active"
            >
              Link 1
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 2
            </a>
            <span className="shapla-dropdown-divider"></span>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 3
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 4
            </a>
          </Dropdown>
        </div>
        <div className="p-8">
          <Dropdown
            trigger={
              <button className="shapla-button">From Right: Hover</button>
            }
            hoverable={true}
            right={true}
          >
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link is-active"
            >
              Link 1
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 2
            </a>
            <span className="shapla-dropdown-divider"></span>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 3
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 4
            </a>
          </Dropdown>
        </div>
        <div className="p-8">
          <Dropdown
            trigger={
              <button className="shapla-button">
                From Bottom to Top: Click
              </button>
            }
            hoverable={false}
            direction="up"
          >
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link is-active"
            >
              Link 1
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 2
            </a>
            <span className="shapla-dropdown-divider"></span>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 3
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 4
            </a>
          </Dropdown>
        </div>
        <div className="p-8">
          <Dropdown
            trigger={
              <button className="shapla-button">Auto direction: Click</button>
            }
            hoverable={false}
          >
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link is-active"
            >
              Link 1
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 2
            </a>
            <span className="shapla-dropdown-divider"></span>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 3
            </a>
            <a
              href="https://example.com"
              className="shapla-dropdown-item is-link"
            >
              Link 4
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default DropdownPage;
