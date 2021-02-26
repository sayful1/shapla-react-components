import React, {Component} from 'react';
import PropTypes from "prop-types";

class DropdownMenu extends Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    active: false,
    right: false,
    role: 'menu',
    direction: 'auto',
    maxItems: 0,
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    active: PropTypes.bool,
    right: PropTypes.bool,
    role: PropTypes.string,
    direction: PropTypes.oneOf(['auto', 'up', 'down']),
    maxItems: PropTypes.number,
  }

  constructor(props) {
    super(props);
    this.dropdownMenuRef = React.createRef();
    this.state = {autoClass: '', isActive: false}

    this.calculateDirection = this.calculateDirection.bind(this);
  }

  componentDidMount() {
    this.setState(state => state.isActive = this.props.active);
  }

  componentDidUpdate(preProps) {
    if (preProps.active !== this.props.active) {
      this.calculateDirection();
    }
  }

  render() {
    const {role, children, beforeContent, afterContent} = this.props;
    return (
      <div className={this.containerClass()} style={this.containerStyle()} role={role} ref={this.dropdownMenuRef}>
        <div className="shapla-dropdown-menu__inner">
          {beforeContent}
          <div className="shapla-dropdown-menu__content">{children}</div>
          {afterContent}
        </div>
      </div>
    )
  }

  containerClass() {
    let classes = ['shapla-dropdown-menu'];
    if (this.state.isActive) classes.push('is-active');
    if (this.state.autoClass) classes.push(this.state.autoClass);
    if (this.props.right) classes.push('is-right');
    if (this.props.direction === 'up') classes.push('is-up');
    if (this.props.maxItems) classes.push('has-max-items');
    return classes.join(' ');
  }

  containerStyle() {
    if (this.props.maxItems) {
      return {
        '--max-menu-items': this.props.maxItems
      };
    }
    return {};
  }

  calculateDirection() {
    let browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
      el = this.dropdownMenuRef.current,
      elParent = el.parentNode,
      rect = elParent.getBoundingClientRect(),
      win = elParent.ownerDocument.defaultView,
      elFromTop = parseInt(rect.top + win.pageYOffset),
      spaceToBottom = browserHeight - elFromTop,
      elHeight = el.scrollHeight;

    if ((elHeight + 15) < spaceToBottom) {
      this.setState(state => state.autoClass = 'is-down')
    } else {
      this.setState(state => state.autoClass = 'is-up')
    }
  }
}

export {DropdownMenu}
export default DropdownMenu;
