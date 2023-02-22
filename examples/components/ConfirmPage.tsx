import React from "react";
import { DialogContainer, Dialog } from "../src";

class ConfirmPage extends React.Component {
  constructor(props) {
    super(props);

    this.openBoxModal = this.openBoxModal.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
  }

  openBoxModal() {
    Dialog.confirm("Are you sure to delete the item?").then((confirm) => {
      if (confirm) {
        console.log("Confirmed");
      }
    });
  }

  openAlertModal() {
    Dialog.alert({
      message: "You need to click Ok button to close it.",
      title: "Simple Alert",
    });
  }

  render() {
    return (
      <div className="stackonet-admin-app p-8">
        <div className="space-x-4">
          <button className="shapla-button m-2" onClick={this.openBoxModal}>
            Confirm It
          </button>
          <button className="shapla-button m-2" onClick={this.openAlertModal}>
            Simple Alert
          </button>
        </div>

        <DialogContainer />
      </div>
    );
  }
}

export default ConfirmPage;
