import React from "react";

class TableHeader extends React.Component {
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
      <thead>
      <tr className="shapla-data-table__header-row">
        {this.props.children}
      </tr>
      </thead>
    )
  }
}

export {TableHeader}
export default TableHeader;
