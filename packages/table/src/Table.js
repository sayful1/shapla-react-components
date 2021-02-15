import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./TableHeader";
import HeaderCell from "./HeaderCell";
import TableBody from "./TableBody";
import BodyRowNoItem from "./BodyRowNoItem";
import BodyRow from "./BodyRow";
import BodyCell from "./BodyCell";

class Table extends React.Component {
  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    items: [],
    selectedItems: [],
    columns: [],
    actions: [],
    index: 'id',
    selectAllText: 'Select All',
    notFoundText: 'No items found.',
    sortBy: 'id',
    sortOrder: 'desc',
    showCb: true,
    showExpand: false,
    mobileWidth: 768,
    onClickSort: () => {
    },
    onSelectItem: () => {
    },
    onClickMore: () => {
    },
    onClickAction: () => {
    },
    onClickToggle: () => {
    },
  }

  /**
   * Specifies props data type
   */
  static propTypes = {
    items: PropTypes.array,
    selectedItems: PropTypes.array,
    columns: PropTypes.array,
    actions: PropTypes.array,
    index: PropTypes.string,
    selectAllText: PropTypes.string,
    notFoundText: PropTypes.string,
    sortBy: PropTypes.string,
    sortOrder: PropTypes.string,
    showCb: PropTypes.bool,
    showExpand: PropTypes.bool,
    mobileWidth: PropTypes.number,
    onClickSort: PropTypes.func,
    onSelectItem: PropTypes.func,
  }

  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);

    this.state = {windowWidth: 0};

    this.handleSelectAll = this.handleSelectAll.bind(this);
  }

  componentDidMount() {
    this.updateTableWidth();

    window.addEventListener('resize', () => {
      this.updateTableWidth();
    });

    window.addEventListener('orientationchange', () => {
      this.updateTableWidth();
    });
  }

  updateTableWidth() {
    this.setState(state => state.windowWidth = window.innerWidth)
  }

  isMobileView() {
    return this.state.windowWidth <= this.props.mobileWidth;
  }

  actionColumn() {
    let column = 'title';
    this.props.columns.forEach((col, index) => {
      if (index === 0) column = col.key;
    });
    return column;
  }

  tableContainerClasses() {
    let classes = ['shapla-data-table-container'];
    if (this.isMobileView()) {
      classes.push('shapla-data-table--mobile')
    }
    return classes.join(' ');
  }

  /**
   * Render component UI
   */
  render() {
    const {
      areaLabel, index, showCb, showExpand, columns, sortBy, sortOrder, onClickSort, items,
      notFoundText, selectedItems, actions, onClickAction, onClickToggle
    } = this.props;
    let headerCells = columns.map(column => {
      return (
        <HeaderCell key={column.key} column={column} sortBy={sortBy} sortOrder={sortOrder}
                    isPrimary={column.key === this.actionColumn()}
                    onClickSort={(key, order) => onClickSort(key, order)}
        />
      );
    });
    let bodyRows = items.map(item => {
      let isSelected = selectedItems.includes(item[index]);
      let bodyCells = columns.map(column => {
        return (
          <BodyCell key={column.key} column={column} item={item} actions={actions}
                    isPrimary={this.actionColumn() === column.key} isMobile={this.isMobileView()}
                    onClickAction={onClickAction} onClickToggle={onClickToggle}>
            {item[column.key]}
          </BodyCell>
        )
      })
      return (
        <BodyRow key={item[index]} className={isSelected ? 'is-selected' : ''}>
          {showCb && <BodyCell isCheckbox={true}>
            <input type='checkbox' checked={isSelected} value={item[index]}
                   onChange={() => this.handleSelectItem(item)}/>
          </BodyCell>}
          {bodyCells}
        </BodyRow>
      )
    });
    return (
      <div className={this.tableContainerClasses()}>
        <table className="shapla-data-table" aria-label={areaLabel}>
          <TableHeader>
            {showCb &&
            <HeaderCell isCheckbox={true}>
              <input type="checkbox" checked={this.isAllSelected()} onChange={this.handleSelectAll}/>
            </HeaderCell>
            }
            {headerCells}
            {showExpand && <HeaderCell isExpandToggle={true}/>}
          </TableHeader>
          <TableBody>
            {!!items.length && bodyRows}
            {!items.length && <BodyRowNoItem colspan={this.colspan()}>{notFoundText}</BodyRowNoItem>}
          </TableBody>
        </table>
      </div>
    )
  }

  colspan() {
    let columns = Object.keys(this.props.columns).length;

    if (this.props.showCb) {
      columns += 1;
    }

    if (this.props.showExpand) {
      columns += 1;
    }

    return columns;
  }

  isAllSelected() {
    const {items, selectedItems} = this.props;
    if (!items.length) {
      return false;
    }

    return selectedItems.length === items.length;
  }

  handleSelectItem(item) {
    const {selectedItems, index, onSelectItem} = this.props;
    let value = item[index] !== undefined ? item[index] : item.id,
      indexSelected = selectedItems.indexOf(value),
      selected = selectedItems;
    if (-1 === indexSelected) {
      selected.push(value);
    } else {
      selected.splice(indexSelected, 1);
    }
    onSelectItem(selected);
  }

  handleSelectAll() {
    let selected = [];
    const {items, selectedItems, index, onSelectItem} = this.props;

    if (items.length && (selectedItems.length !== items.length)) {
      items.forEach(item => {
        if (item[index] !== undefined) {
          selected.push(item[index]);
        } else {
          selected.push(item.id);
        }
      });
    }

    onSelectItem(selected);
  }
}

export {Table}
export default Table;
