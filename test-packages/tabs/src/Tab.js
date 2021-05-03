import React from 'react';
import PropTypes from "prop-types";
import TabEvent from "./TabEvent";

class Tab extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    label: '',
    className: '',
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    label: PropTypes.string,
    className: PropTypes.string,
  }

  constructor(props) {
    super(props);

    this.state = {isActive: false}
  }

  componentDidMount() {
    TabEvent.on('change.ShaplaTab', data => {
      let selectedTab = data.current;
      console.log(selectedTab.props.label,this.props.label)
      this.setState(state => state.isActive = (this.props.label === selectedTab.props.label));
    })
  }

  render() {
    return (<div id={this.panelId()} className={this.getClasses()}>{this.props.children}</div>)
  }

  panelId() {
    return this.props.label.toLowerCase().replace(/ /g, '-');
  }

  getClasses() {
    const {className} = this.props;
    let classes = ['shapla-tabs__panel'];
    if (this.state.isActive) classes.push('is-active')
    if (className) classes.push(className)
    return classes.join(' ');
  }
}

export {Tab}
export default Tab;
