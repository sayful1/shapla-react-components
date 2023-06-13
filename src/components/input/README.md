# Shapla TextField

A simple customized input field.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/react-components
```

# Usage

### Styles (with Sass)

```scss
@use "@shapla/react-components/src/index.scss" as shapla;

@include shapla.text-field;
```

### Javascript Instantiation

```jsx
import { InputField } from "@shapla/react-components";

export default () => {
  return (
    <InputField
      label="Email"
      helpText="Write your valid email address"
      validationText="Please enter a valid email address"
      hasError={true}
    />
  );
};
```

### Props

| Property         | Type     | Required | Default | Description                                                              |
| ---------------- | -------- | -------- | ------- | ------------------------------------------------------------------------ |
| `type`           | String   | **no**   | `text`  | Input field type. Supports all types that support for normal input field |
| `label`          | String   | **yes**  | ``      | Input field label                                                        |
| `Value`          | String   | **no**   | ``      | Field value                                                              |
| `autocomplete`   | String   | **no**   | ``      | Field autocomplete attribute                                             |
| `name`           | String   | **no**   | ``      | Field name attribute                                                     |
| `id`             | String   | **no**   | ``      | Field id attribute                                                       |
| `helpText`       | String   | **no**   | ``      | Field help text                                                          |
| `validationText` | String   | **no**   | ``      | Field validation text                                                    |
| `hasError`       | Boolean  | **no**   | `false` | If set `true`, field will show `validationText`                          |
| `hasSuccess`     | Boolean  | **no**   | `false` | If set `true`, field will show success status                            |
| `disabled`       | Boolean  | **no**   | `false` | If set `true`, field will be read only                                   |
| `required`       | Boolean  | **no**   | `false` | If set `true`, field must be filled                                      |
| `readonly`       | Boolean  | **no**   | `false` | If set `true`, User cannot modify field value but data can be submit     |
| `rows`           | Number   | **no**   | ``      | Set number of rows for textarea field                                    |
| `dir`            | String   | **no**   | `ltr`   | Set direction. Value can be `ltr` or `rtl` or `auto`                     |
| `onChange`       | Function | **no**   |         | When you input anything on field                                         |
| `onFocus`        | Function | **no**   |         | When user Intracting                                                     |
| `onBlur`         | Function | **no**   |         | When intraction gone                                                     |
| `onKeyDown`      | Function | **no**   |         | When Key down                                                            |

## Listeners

The input component fires the following events:

**`OnChange`**: When you input anything on field

```html
<!-- jsx -->
<InputField onChange="handleInputEvent" />

<!--  -->
methods: { handleInputEvent(value){ // Handle input event } }
```
