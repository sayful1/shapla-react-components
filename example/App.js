import './style.scss';
import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom/umd/react-router-dom"
import {ButtonExample} from "./pages/ButtonExample";
import {ModalExample} from "./pages/ModalExample";
import SpinnerExample from "./pages/SpinnerExample";
import DeleteIconExample from "./pages/DeleteIconExample";
import ConfirmDialogExample from "./pages/ConfirmDialogExample";

class App extends React.Component {
  render() {
    return (
      <div className="shapla-react-components-example">
        <BrowserRouter>

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
            </div>
          </div>

          <Switch>
            <Route path='/button'><ButtonExample/></Route>
            <Route path='/modal'><ModalExample/></Route>
            <Route path='/dialog'><ConfirmDialogExample/></Route>
            <Route path='/spinner'><SpinnerExample/></Route>
            <Route path='/delete-icon'><DeleteIconExample/></Route>
          </Switch>

        </BrowserRouter>

      </div>
    )
  }
}

export {App}
export default App;
