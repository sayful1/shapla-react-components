import React from 'react'
import {Tabs, Tab} from "../src";
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
    return (
      <div className="stackonet-admin-app">
        <Tabs>
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
        </Tabs>
      </div>
    )
  }
}

export {App}
export default App;
