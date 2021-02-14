import React from "react";
import TableIcon from "./TableIcon";

class HeaderCell extends React.Component {

  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    column: {key: '', label: ''},
    isPrimary: false,
    isCheckbox: false,
    isExpandToggle: false,
    sortBy: 'id',
    sortOrder: 'desc',
    onClickSort: () => {
    },
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
    const {children, column} = this.props;
    return (
      <th className={this.getHeadCellClass()} role="columnheader" scope="col">
        {
          children ||
          this.isSortable() ? column.label :
            <a href="#" onClick={event => this.handleSort(event)}>
              {this.isSortedDesc() && <TableIcon icon="arrow-upward"/>}
              {this.isSortedAsc() && <TableIcon icon="arrow-downward"/>}
              <span>{column.label}</span>
            </a>
        }
      </th>
    )
  }

  handleSort(event) {
    event.preventDefault();
    if (this.props.onClickSort) {
      this.props.onClickSort(this.props.column.key);
    }
  }

  getHeadCellClass() {
    const {column, isPrimary, isCheckbox, isExpandToggle} = this.props;
    let classes = ['shapla-data-table__header-cell'];
    if (column && column.key) classes.push(`shapla-data-table__header-cell-${column.key}`);
    if (isPrimary) classes.push('column-primary');
    if (isCheckbox) classes.push('is-checkbox-cell');
    if (isExpandToggle) classes.push('is-expand-toggle-cell');
    if (this.isNumeric()) classes.push('is-numeric-cell');
    return classes.join(' ');
  }

  isNumeric() {
    const {column} = this.props;
    return (typeof column.numeric !== "undefined" && column.numeric === true);
  }

  isSortable() {
    const {column} = this.props;
    return (typeof column.sortable !== "undefined" && column.sortable === true);
  }

  isSorted() {
    return this.props.column.key === this.props.sortBy;
  }

  isSortedAsc() {
    return this.props.sortOrder === 'asc';
  }

  isSortedDesc() {
    return this.props.sortOrder === 'desc';
  }
}

export {HeaderCell}
export default HeaderCell;
