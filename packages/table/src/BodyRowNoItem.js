import React from "react";

class BodyRowNoItem extends React.Component {

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
      <tr className="shapla-data-table__row no-items">
        <td className="shapla-data-table__cell has-no-item" colSpan={this.props.colspan}>
          {this.props.children}
        </td>
      </tr>
    )
  }
}

export {BodyRowNoItem}
export default BodyRowNoItem;
