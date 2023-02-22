# Shapla React Notifications

A simple notification component for React

[<img src="./packages/notifications/screenshot.png" style="width: 100%;" />](https://github.com/sayful1/shapla-react-components)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-notifications
```

# Usage

### Note

**Use only one 'NotificationContainer' component in the app.**

### Styles

with Sass:

```js
import "@shapla/react-notifications/src/index.scss";
```

with CSS:

```js
import "@shapla/react-notifications/dist/notifications.css";
```

### Javascript Instantiation

```js
import React from "react";
import { NotificationContainer, Notify } from "@shapla/react-notifications";

class MyApp extends React.Component {
  createNotification = (type) => {
    return () => {
      switch (type) {
        case "info":
          Notify.info("Info message");
          break;
        case "success":
          Notify.success("Success message", "Title here");
          break;
        case "warning":
          Notify.warning("Warning message", "Close after 3000ms", 3000);
          break;
        case "error":
          Notify.error("Error message", "Click me!", 5000);
          break;
      }
    };
  };

  render() {
    return (
      <div>
        <button onClick={this.createNotification("info")}>Info</button>
        <button onClick={this.createNotification("success")}>Success</button>
        <button onClick={this.createNotification("warning")}>Warning</button>
        <button onClick={this.createNotification("error")}>Error</button>

        <NotificationContainer position="top-right" />
      </div>
    );
  }
}
```

### NotificationContainer Props

| Property        | Type    | Required | Default     | Description                                                                                        |
| --------------- | ------- | -------- | ----------- | -------------------------------------------------------------------------------------------------- |
| `enterTimeout`  | Number  | **no**   | `400`       | Animation time when entering a new notification.                                                   |
| `leaveTimeout`  | Number  | **no**   | `400`       | Animation time when leaving a notification from view.                                              |
| `position`      | String  | **no**   | `top-right` | Value can be 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right' |
| `showDismisses` | Boolean | **no**   | `true`      | Set `false` to hide close icon from notification                                                   |

## Notify API

- Notify.info(message, title, timeout);
- Notify.success(message, title, timeout);
- Notify.warning(message, title, timeout);
- Notify.error(message, title, timeout);

| Property  | Type   | Required | Default | Description                       |
| --------- | ------ | -------- | ------- | --------------------------------- |
| `message` | String | **yes**  | ``      | Notification message              |
| `title`   | String | **no**   | ``      | Notification title                |
| `timeout` | Number | **no**   | `4000`  | The popup timeout in milliseconds |
