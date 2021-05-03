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
    let data = children || column.label;
    return (
      <th className={this.getHeadCellClass()} role="columnheader" scope="col">
        {
          !this.isSortable() ? data :
            <a href="#" onClick={event => this.handleSort(event)}>
              {this.isSortedDesc() && <TableIcon icon="arrow-upward"/>}
              {!this.isSortedDesc() && <TableIcon icon="arrow-downward"/>}
              <span>{data}</span>
            </a>
        }
      </th>
    )
  }

  handleSort(event) {
    event.preventDefault();
    const {onClickSort, column, sortOrder} = this.props;
    if (onClickSort) {
      let order = sortOrder === 'asc' ? 'desc' : 'asc';
      onClickSort(column.key, order);
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
    if (this.isSortable()) {
      classes.push('is-sortable');
      if (this.isSortedDesc()) classes.push('is-sorted-descending');
      if (!this.isSortedDesc()) classes.push('is-sorted-ascending');
    }
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
