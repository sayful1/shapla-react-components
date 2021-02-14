import React from "react";

class BodyRowExpand extends React.Component {

  /**
   * Specifies the default values for props:
   */
  static defaultProps = {
    colspan: 1,
  }

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
      <tr className="shapla-data-table__row" style="display:none;">
        <td className="shapla-data-table__cell is-expand-cell" colSpan={this.props.colspan}>
          <div className="expand-cell-content">
            {this.props.children}
          </div>
        </td>
      </tr>
    )
  }
}

export {BodyRowExpand}
export default BodyRowExpand;
