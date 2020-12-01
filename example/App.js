import './style.scss';
import React from 'react'
import {HashRouter, Link, Route, Switch} from "react-router-dom/umd/react-router-dom"
import {ButtonExample} from "./pages/ButtonExample";
import {ModalExample} from "./pages/ModalExample";
import SpinnerExample from "./pages/SpinnerExample";
import DeleteIconExample from "./pages/DeleteIconExample";
import ConfirmDialogExample from "./pages/ConfirmDialogExample";
import ColumnsExample from "./pages/ColumnsExample";

class App extends React.Component {
  render() {
    return (
      <div className="shapla-react-components-example">
        <HashRouter>

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

        </HashRouter>

      </div>
    )
  }
}

export {App}
export default App;
