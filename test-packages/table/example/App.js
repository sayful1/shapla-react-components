import React from 'react'
import {Table, Pagination, StatusList} from "../src";
import '../src/index.scss'
import 'shapla-css/src/utilities/screen-readers.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      statuses: [
        {key: 'all', label: 'All', count: 50},
        {key: 'bangle', label: 'Bangle', count: 20},
        {key: 'english', label: 'English', count: 10},
        {key: 'math', label: 'Math', count: 20, active: true},
      ],
      columns: [
        {key: 'title', label: 'Title', numeric: false},
        {key: 'bangle', label: 'Bangle', numeric: true},
        {key: 'english', label: 'English', numeric: true},
        {key: 'math', label: 'Math', numeric: true, sortable: true},
      ],
      rows: [
        {id: 1, title: 'Sayful Islam', bangle: 70, english: 80, math: 100},
        {id: 2, title: 'Akhi', bangle: 70, english: 80, math: 90},
        {id: 3, title: 'Saif Al Araf', bangle: 70, english: 80, math: 80},
      ],
      actions: [
        {key: 'edit', label: 'Edit'},
        {key: 'trash', label: 'Delete'}
      ],
      sortBy: 'math',
      sortOrder: 'asc',
      selectedItems: [],
      currentPage: 1,
    }
  }

  render() {
    const {rows, columns, actions, selectedItems, sortBy, sortOrder} = this.state;
    return (
      <div className="stackonet-admin-app">
        <div>
          <h2>Has items</h2>
          <StatusList items={this.state.statuses} onChange={status => this.changeStatus(status)}/>
          <Table
            items={rows}
            selectedItems={selectedItems}
            columns={columns}
            actions={actions}
            sortBy={sortBy}
            sortOrder={sortOrder}
            onSelectItem={items => this.setState(state => state.selectedItems = items)}
            onClickSort={(key, order) => this.sortData(key, order)}
            onClickAction={(action, item) => this.onActionClick(action, item)}
          />
          <Pagination totalItems={100} perPage={20} currentPage={this.state.currentPage}
                      onPaginate={page => this.setState(state => state.currentPage = page)}/>
        </div>

        <div>
          <h2>No item</h2>
          <Table columns={columns}/>
        </div>
      </div>
    )
  }

  sortData(column, order) {
    this.setState(state => state.sortBy = column);
    this.setState(state => state.sortOrder = order);

    let rows = this.state.rows;
    if ('asc' === order) {
      rows.sort((a, b) => a[column] - b[column]);
    } else {
      rows.sort((a, b) => b[column] - a[column]);
    }
    this.setState(state => state.rows = rows);
  }

  onActionClick(action, row) {
    if ('trash' === action) {
      if (confirm('Are you sure to delete?')) {
        alert('deleted: ' + row.title);
      }
    }
  }

  changeStatus(status) {
    let statuses = this.state.statuses;
    statuses.forEach((_status, index) => {
      statuses[index]['active'] = (_status.key === status.key);
    });
    this.setState(state => state.statuses = statuses);
  }
}

export {App}
export default App;
