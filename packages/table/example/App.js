import React from 'react'
import {Table} from "../src";
import '../src/index.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    }
  }

  render() {
    const {rows, columns, actions, selectedItems, sortBy, sortOrder} = this.state;
    return (
      <div className="stackonet-admin-app">
        <div>
          <h2>Has items</h2>
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
}

export {App}
export default App;
