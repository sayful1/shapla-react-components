import React from 'react'
import DashboardLayout from "../src/index";
import '../src/index.scss'
import 'shapla-css/src/minireset/_minireset.scss'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSideNav: false,
    }
  }

  render() {
    return (
      <div className="example-dashboard-layout">
        <DashboardLayout
          title='Dashboard'
          userDisplayName='Sayful Islam'
          activateSideNav={this.state.activateSideNav}
          onShowSidenav={() => this.setState({activateSideNav: true})}
          onHideSidenav={() => this.setState({activateSideNav: false})}
        >
          Some Content
        </DashboardLayout>
      </div>
    )
  }
}

export {App}
export default App;
