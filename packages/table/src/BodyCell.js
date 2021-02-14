import React from 'react'
import PropTypes from 'prop-types';
import TableIcon from "./TableIcon";

class BodyCell extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    column: {},
    item: {},
    actions: [],
    isPrimary: false,
    isToggle: false,
    isMobile: false,
    onClickMore: () => {
    },
    onClickAction: () => {
    },
    onClickToggle: () => {
    },
  };

  /**
   * Specifies props data type
   */
  static propTypes = {
    column: PropTypes.object,
    item: PropTypes.object,
    actions: PropTypes.array,
    isPrimary: PropTypes.bool,
    isToggle: PropTypes.bool,
    isMobile: PropTypes.bool,
    onClickAction: PropTypes.func,
    onClickToggle: PropTypes.func,
    onClickMore: PropTypes.func,
  }

  /**
   * Check if the cell is numeric
   *
   * @returns {boolean}
   */
  isNumeric() {
    return (typeof this.props.column.numeric !== "undefined" && this.props.column.numeric === true);
  }

  /**
   * Get body cell class
   *
   * @returns {string}
   */
  getBodyCellClass() {
    const {column, isPrimary, isToggle} = this.props;
    let classes = ['shapla-data-table__cell', `shapla-data-table__cell-${column.key}`];
    if (isPrimary) classes.push('column-primary');
    if (isToggle) classes.push('is-expand-toggle-cell');
    if (this.isNumeric()) classes.push('is-numeric-cell');
    return classes.join(' ');
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render component UI
   */
  render() {
    const {column, item, children, isPrimary, isMobile} = this.props;

    return (
      <td data-colname={column.label} className={this.getBodyCellClass()}>
        {children || item[column.key]}
        {isPrimary && this.cellActionHtml()}
        {isPrimary && isMobile &&
        <button className="data-table-toggle-button" aria-label="Show more details"
                onClick={event => this.toggleClicked(event)}>
          <TableIcon icon="expand-less" className="triangle-up"/>
          <TableIcon icon="expand-less" className="triangle-up"/>
        </button>
        }
      </td>
    )
  }

  cellToggleHtml() {
    return (
      <button className="data-table-toggle-button" aria-label="Show more details"
              onClick={event => this.moreClicked(event)}>
        <TableIcon icon="expand-less" class="expand-triangle-up"/>
        <TableIcon icon="expand-more" class="expand-triangle-down"/>
      </button>
    )
  }

  cellActionHtml() {
    const {actions, isPrimary, actionsRow} = this.props;
    if (!isPrimary) {
      return null;
    }
    if (actionsRow) {
      return actionsRow;
    }
    let actionRow = actions.map(action => {
      return (
        <span key={action.key} className={action.key}>
          <a href="#" onClick={() => this.actionClicked(action.key)}>{action.label}</a>
        </span>
      )
    });
    return (actions.length && <div className='row-actions'>{actionRow}</div>)
  }

  moreClicked(event) {
    if (this.props.onClickMore) {
      this.props.onClickMore(event, this.props.item);
    }
  }

  toggleClicked(event) {
    if (this.props.onClickToggle) {
      this.props.onClickToggle(event, this.props.item);
    }
  }

  actionClicked(key) {
    if (this.props.onClickAction) {
      this.props.onClickAction(key, this.props.item);
    }
  }
}

export {BodyCell}
export default BodyCell;
