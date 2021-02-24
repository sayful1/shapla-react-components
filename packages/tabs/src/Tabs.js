import React from 'react';
import PropTypes from "prop-types";
import TabEvent from "./TabEvent";

class Tabs extends React.Component {

  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    alignment: 'center',
    size: 'default',
    tabStyle: 'default',
    fullwidth: false,
    vertical: false,
    children: [],
    activeTabIndex: 0,
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    size: PropTypes.oneOf(['default', 'small', 'medium', 'large']),
    tabStyle: PropTypes.oneOf(['default', 'boxed', 'rounded', 'toggle']),
    fullwidth: PropTypes.bool,
    vertical: PropTypes.bool,
    activeTabIndex: PropTypes.number,
  }

  constructor(props) {
    super(props);

    this.state = {tabs: [], selectedTab: 0}
    this.changeSelectedTab = this.changeSelectedTab.bind(this);
  }

  componentDidMount() {
    const {children, activeTabIndex} = this.props;
    this.setState(state => state.tabs = children);
    this.setState(state => state.selectedTab = activeTabIndex);
    children.forEach((tab, index) => {
      if (index === activeTabIndex) {
        TabEvent.dispatch('change.ShaplaTab', tab);
      }
    })
  }

  render() {
    let navs = this.props.children.map((tab, index) => {
      const {label} = tab.props;
      let classes = ['shapla-tabs__nav-item'];
      if (index === this.state.selectedTab) {
        classes.push('is-active');
      }
      const href = '#' + label.toLowerCase().replace(/ /g, '-');

      return (
        <li className={classes.join(' ')} key={index}>
          <a href={href} onClick={event => this.changeSelectedTab(event, tab, index)}>{label}</a>
        </li>
      )
    })
    return (
      <div className={this.tabContainerClasses()}>
        <div className={this.tabClasses()}>
          <ul className="shapla-tabs__nav">
            {navs}
          </ul>
        </div>
        {this.props.children}
      </div>
    )
  }

  tabContainerClasses() {
    let classes = ['shapla-tabs'];
    if (this.props.vertical) classes.push('shapla-tabs--vertical');
    return classes.join(' ')
  }

  tabClasses() {
    const {fullwidth, alignment, size, tabStyle} = this.props;
    let classes = ['shapla-tabs__tab'];
    if (fullwidth) classes.push('is-fullwidth');
    if (alignment === 'center') classes.push('is-centered');
    if (alignment === 'right') classes.push('is-right');
    if (size === 'small') classes.push('is-small');
    if (size === 'medium') classes.push('is-medium');
    if (size === 'large') classes.push('is-large');
    if (tabStyle === 'boxed') classes.push('is-boxed');
    if (tabStyle === 'toggle' || tabStyle === 'rounded') classes.push('is-toggle');
    if (tabStyle === 'rounded') classes.push('is-toggle-rounded');
    return classes.join(' ')
  }

  changeSelectedTab(event, selectedTab, index) {
    event.preventDefault();
    this.setState(state => state.selectedTab = index)
    TabEvent.dispatch('change.ShaplaTab', selectedTab);
  }
}

export {Tabs}
export default Tabs;
