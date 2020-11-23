import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom/umd/react-router-dom"
import {ButtonExample} from "./pages/ButtonExample";
import './style.scss';

class App extends React.Component {
  render() {
    return (
      <div className="shapla-react-components-example">
        <BrowserRouter>

          <div className='flex flex-wrap -m-2'>
            <div className='p-2'>
              <button className='shapla-button'><Link to='/'>Home</Link></button>
            </div>
            <div className='p-2'>
              <button className='shapla-button'><Link to='/button'>Button</Link></button>
            </div>
          </div>

          <Switch>
            <Route path='/button'><ButtonExample/></Route>
          </Switch>

        </BrowserRouter>

      </div>
    )
  }
}

export {App}
export default App;
