import React from "react";

class BodyRow extends React.Component {

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
    return (<tr className="shapla-data-table__row">{this.props.children}</tr>)
  }
}

export {BodyRow}
export default BodyRow;
