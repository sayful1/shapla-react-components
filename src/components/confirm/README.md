# React Confirm Dialog

A simple confirm modal/dialog based on modal component for React

[<img src="./packages/confirm-dialog/screenshot.png" style="width: 100%;" />](https://github.com/sayful1/shapla-react-components)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-confirm-dialog
```

# Usage

### Note

**Use only one 'DialogContainer' component in the app.**

### Styles

with Sass:

```js
import "@shapla/react-confirm-dialog/src/index.scss";
```

with CSS:

```js
import "@shapla/react-confirm-dialog/dist/confirm-dialog.css";
```

### Javascript Instantiation

```js
import React from "react";
import { DialogContainer, Dialog } from "@shapla/react-confirm-dialog";

class MyApp extends React.Component {
  constructor(props) {
    super(props);

    this.openConfirmModal = this.openConfirmModal.bind(this);
    this.openAlertModal = this.openAlertModal.bind(this);
  }

  openConfirmModal() {
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
      <div className="admin-app p-8">
        <div className="space-x-4">
          <button className="shapla-button m-2" onClick={this.openConfirmModal}>
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
```

## Notify API

- Dialog.alert(message);
- Dialog.confirm(message);

Both `alert` and `confirm` can accept String for the message or Object with following props.

| Property        | Type            | Required | Default   | Description                                             |
| --------------- | --------------- | -------- | --------- | ------------------------------------------------------- |
| `message`       | String          | **yes**  | ``        | Confirm dialog message                                  |
| `title`         | String          | **no**   | ``        | Confirm dialog title                                    |
| `icon`          | String          | **no**   | `primary` | Value can be `primary`, `success` or `error`.           |
| `confirmButton` | String, Boolean | **no**   | `OK`      | Confirm button text. Set `false` to hide confirm button |
| `cancelButton`  | String, Boolean | **no**   | `Cancel`  | Cancel button text. Set `false` to hide cancel button   |
