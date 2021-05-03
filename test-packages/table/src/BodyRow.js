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
    const {children, className} = this.props;
    let classes = className ? `shapla-data-table__row ${className}` : 'shapla-data-table__row';
    return (<tr className={classes}>{children}</tr>)
  }
}

export {BodyRow}
export default BodyRow;
