import React from 'react'
import {HashRouter, Route, Switch} from "react-router-dom/umd/react-router-dom"
import {ButtonExample} from "./pages/ButtonExample";
import {ModalExample} from "./pages/ModalExample";
import SpinnerExample from "./pages/SpinnerExample";
import DeleteIconExample from "./pages/DeleteIconExample";
import ConfirmDialogExample from "./pages/ConfirmDialogExample";
import ColumnsExample from "./pages/ColumnsExample";
import Welcome from "./pages/Welcome";
import DashboardLayout from "@shapla/react-dashboard-layout";
import menuItems from "./menuItems";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeSideNav: false,
    }
  }

  render() {
    let sidenavMenu = menuItems.map(item => {
      return (
        <li className="sidenav-list__item" key={item.label}>
          <a className="sidenav-list__link" onClick={() => this.handleMenuClick(item)}>{item.label}</a>
        </li>
      );
    });
    return (
      <div className="@shapla/react-components-example">
        <HashRouter>
          <DashboardLayout
            title='Dashboard'
            userDisplayName='Sayful Islam'
            avatarUrl='https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?s=80'
            activateSideNav={this.state.activateSideNav}
            onShowSidenav={() => this.setState({activateSideNav: true})}
            onHideSidenav={() => this.setState({activateSideNav: false})}
            sidenavContent={<ul className="sidenav-list">{sidenavMenu}</ul>}
          >
            <Switch>
              <Route path='/button'><ButtonExample/></Route>
              <Route path='/columns'><ColumnsExample/></Route>
              <Route path='/delete-icon'><DeleteIconExample/></Route>
              <Route path='/dialog'><ConfirmDialogExample/></Route>
              <Route path='/modal'><ModalExample/></Route>
              <Route path='/spinner'><SpinnerExample/></Route>
              <Route path='/'><Welcome/></Route>
            </Switch>
          </DashboardLayout>
        </HashRouter>
      </div>
    )
  }

  /**
   * Handle menu click
   *
   * @param item
   */
  handleMenuClick(item) {
    window.location.hash = item.to;
    this.setState(state => state.activateSideNav = false)
  }
}

export {App}
export default App;
