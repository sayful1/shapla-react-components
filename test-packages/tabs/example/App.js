import React from 'react'
import {Tabs, Tab} from "../src";
import '../src/index.scss'

class App extends React.Component {
  render() {
    return (
      <div className="stackonet-admin-app">

        <Tabs alignment="left">
          <Tab label="Tab One" id="tab-one">Content 1</Tab>
          <Tab label="Tab Two" id="tab-two">Content 2</Tab>
        </Tabs>

        <Tabs alignment="right">
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
        </Tabs>

        <Tabs>
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
        </Tabs>

        <Tabs tabStyle="boxed">
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
        </Tabs>

        <Tabs tabStyle="rounded">
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
        </Tabs>

        <Tabs tabStyle="toggle">
          <Tab label="Tab 1">Content 1</Tab>
          <Tab label="Tab 2">Content 2</Tab>
        </Tabs>
      </div>
    )
  }
}

export {App}
export default App;
