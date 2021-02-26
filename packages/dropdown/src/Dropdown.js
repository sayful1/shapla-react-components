import React from 'react';
import PropTypes from "prop-types";
import DropdownMenu from "./DropdownMenu";

class Dropdown extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    hoverable: true,
    right: false,
    role: 'menu',
    direction: 'auto',
    maxItems: 0,
    trigger: '',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    hoverable: PropTypes.bool,
    right: PropTypes.bool,
    role: PropTypes.string,
    direction: PropTypes.oneOf(['auto', 'up', 'down']),
    maxItems: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.dropdownRef = React.createRef();
    this.state = {isActive: false}
  }

  componentDidMount() {
    if (this.state.isActive) {
      document.addEventListener('click', event => {
        if (!this.dropdownRef.current.contains(event.target)) {
          this.setState(state => state.isActive = false);
        }
      });
    }
  }

  render() {
    const {trigger, role, right, direction, maxItems, children, beforeContent, afterContent} = this.props;
    return (
      <div ref={this.dropdownRef} className={this.containerClasses()}>
        <div className="shapla-dropdown-trigger" aria-haspopup="true"
             aria-expanded={this.state.isActive ? 'true' : 'false'}
             onClick={() => this.setState(state => state.isActive = !this.state.isActive)}>
          {trigger}
        </div>
        <DropdownMenu active={this.state.isActive} role={role} direction={direction} right={right} maxItems={maxItems}
                      beforeContent={beforeContent} afterContent={afterContent} children={children}/>
      </div>
    )
  }

  containerClasses() {
    let classes = ['shapla-dropdown'];
    if (this.props.hoverable) classes.push('is-hoverable');
    return classes.join(' ')
  }
}

export {Dropdown};
export default Dropdown;
