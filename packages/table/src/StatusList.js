import React from "react";
import PropTypes from "prop-types";

class StatusList extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    type: 'horizontal',
    items: [],
    onChange: () => {
    }
  }

  /**
   * Specifies props data type
   */
  static propTypes = {
    items: PropTypes.array,
    type: PropTypes.oneOf(['vertical', 'horizontal']),
    onChange: PropTypes.func,
  }

  render() {
    let items = this.props.items.map(item => {
      let classes = ['shapla-status-list__item'];
      if (item.active) classes.push('is-active');
      return (
        <li key={item.key} className={classes.join(' ')}>
          <a className="shapla-status-list__item-link" href="#" onClick={event => this.handleItemClick(event, item)}>
            <span className="shapla-status-list__item-label">{item.label}</span>
            <span className="shapla-status-list__item-count">{item.count}</span>
          </a>
        </li>
      )
    })
    let classes = ['shapla-status-list', `shapla-status-list--${this.props.type}`];
    return (
      <ul className={classes.join(' ')}>
        {items}
      </ul>
    )
  }

  handleItemClick(event, item) {
    event.preventDefault();
    this.props.onChange(item);
  }
}

export {StatusList};
export default StatusList;
