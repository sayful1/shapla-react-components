import React from 'react'
import {Link} from "react-router-dom/umd/react-router-dom"
import menuItems from "../menuItems";

class Welcome extends React.Component {
  render() {
    let sidenavMenu = menuItems.map(item => {
      return (
        <div className='p-2' key={item.label}>
          <button className='shapla-button'><Link to={item.to}>{item.label}</Link></button>
        </div>
      );
    });
    return (
      <div className="shapla-react-components-welcome">
        <div className='flex flex-wrap -m-2'>{sidenavMenu}</div>
      </div>
    )
  }
}

export {Welcome}
export default Welcome;
