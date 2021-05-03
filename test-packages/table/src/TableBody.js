import React from "react";

class TableBody extends React.Component {
  /**
   * Class constructor
   *
   * @param props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Render component UI
   */
  render() {
    return (
      <tbody className="shapla-data-table__content">
      {this.props.children}
      </tbody>
    )
  }
}

export {TableBody}
export default TableBody;
