import './style.scss';
import "shapla-react-dashboard-layout/src/index.scss";
import React from 'react'
import {HashRouter, Link, Route, Switch} from "react-router-dom/umd/react-router-dom"
import {ButtonExample} from "./pages/ButtonExample";
import {ModalExample} from "./pages/ModalExample";
import SpinnerExample from "./pages/SpinnerExample";
import DeleteIconExample from "./pages/DeleteIconExample";
import ConfirmDialogExample from "./pages/ConfirmDialogExample";
import ColumnsExample from "./pages/ColumnsExample";
import DashboardLayout from "shapla-react-dashboard-layout";
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
          <Link className="sidenav-list__link" to={item.to}>{item.label}</Link>
        </li>
      );
    });
    return (
      <div className="shapla-react-components-example">
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
            <div className="mb-8">
              <div className='flex flex-wrap -m-2'>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/'>Home</Link></button>
                </div>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/button'>Button</Link></button>
                </div>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/modal'>Modal</Link></button>
                </div>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/dialog'>Confirm Dialog</Link></button>
                </div>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/spinner'>Spinner</Link></button>
                </div>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/delete-icon'>Delete Icon</Link></button>
                </div>
                <div className='p-2'>
                  <button className='shapla-button'><Link to='/columns'>Columns/Grid System</Link></button>
                </div>
              </div>
            </div>

            <Switch>
              <Route path='/button'><ButtonExample/></Route>
              <Route path='/columns'><ColumnsExample/></Route>
              <Route path='/delete-icon'><DeleteIconExample/></Route>
              <Route path='/dialog'><ConfirmDialogExample/></Route>
              <Route path='/modal'><ModalExample/></Route>
              <Route path='/spinner'><SpinnerExample/></Route>
            </Switch>
          </DashboardLayout>
        </HashRouter>
      </div>
    )
  }
}

export {App}
export default App;
