# Shapla Range Slider

A simple component for input slider for React.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-components
```

# Usage

Add the component:

```jsx
import { RangeSlider } from "@shapla/react-components";

export default () => {
  const [number, setNumber] = React.useState(10);

  return (
    <RangeSlider value={number} onUpdateValue={setNumber} defaultValue={20} />
  );
};
```

### Props

| Property    | Type    | Required | Default | Description                                    |
| ----------- | ------- | -------- | ------- | ---------------------------------------------- |
| `value`     | Number  | **no**   | `10`    | Value of the input                             |
| `default`   | Number  | **no**   | `0`     | The default value of the input                 |
| `min`       | Number  | **no**   | `0`     | Min value of input                             |
| `max`       | Number  | **no**   | `100`   | Maximum value of input                         |
| `step`      | Number  | **no**   | `1`     | Step of input slider                           |
| `showReset` | Boolean | **no**   | `true`  | Set `true` to show reset to default value      |
| `showInput` | Boolean | **no**   | `true`  | Set `true` to show input field to change value |

## Listeners

The input slider component fires the following events:

**`onUpdateValue`**: When value is changed, it fires the event.

```html
<!-- jsx -->
<Rangeslider
  value="{20}"
  default="{10}"
  onUpdateValue="{handleInput}"
></Rangeslider>

<!-- method -->
const handleInput =(newValue)=>{ // Handle input event } }
```
