# Shapla Switch

Switch is an enhanced version of the standard HTML input checkbox element for React

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-components
```

# Usage

### Styles (with SCSS)

```scss
@use "@shapla/react-components/src/index.scss" as shapla;

@include shapla.input-switch;
```

### Javascript Instantiation

```jsx
import { Switch } from "@shapla/react-components";

export default () => {

     const  [singleSwitch,setSingleSwitch] = React.useState(false),
     return(
        <Switch inputValue ={singleSwitch} onUpdateInputValue={(v)=>setSingleSwitch(v as boolean)} label = "Enable this"></Switch>
     )
};
```

```html

```

### Props

| Property     | Type    | Required          | Default | Description                                            |
| ------------ | ------- | ----------------- | ------- | ------------------------------------------------------ |
| `label`      | String  | **no**            | ``      | Switch label                                           |
| `value`      | String  | **no**            | `on`    | The default value for the switch                       |
| `trueValue`  | String  | **no**            | `true`  | The value when user checked the switch                 |
| `falseValue` | String  | **no**            | `false` | The value when user unchecked the switch               |
| `disabled`   | Boolean | **no**            | `false` | If set `true`, box-shadow will be added around button. |
| `readonly`   | Boolean | **no**            | `false` | If set `true`, you cannot change the value.            |
| `inputValue` | boolean | string ! string[] | **no**  | `false`                                                |

## Listeners

The switch component fires the following events:

**`onUpdateInputValue`**: When switch is clicked, it fires the event.

```html
<!-- jsx -->
<Switch onUpdateModelValue="handleChange" />

<!-- method -->
methods: { handleChange(newValue){ // Handle change event } }
```
