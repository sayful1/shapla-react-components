# Shapla Select Field

A simple customized select field.

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
@use "shapla-css/src/index.scss" as shapla;

@include shapla.select;
```

### Javascript Instantiation

```jsx
import { SelectField } from "@shapla/react-components";

export default () => {
  const options = [
    "Sayful Islam",
    3,
    true,
    { label: "Bangladesh", value: "BD" },
  ];
  const option = "Sayful Islam";
  const updateHandel = (value) => {
    console.log(value);
  };
  return (
    <SelectField
      value={option}
      options={options}
      label="Choose a option"
      helpText="Help text goes here"
      onUpdateValue={updateHandel}
    />
  );
};
```

### Props

| Property               | Type    | Required | Default                       | Description                                                      |
| ---------------------- | ------- | -------- | ----------------------------- | ---------------------------------------------------------------- |
| `options`              | Array   | **yes**  | ``                            | Array of value for select options.                               |
| `label`                | String  | **yes**  | ``                            | Input field label                                                |
| `Value`                | String  | **no**   | ``                            | Field value                                                      |
| `labelKey`             | String  | **no**   | `label`                       | If `options` contain object, then which key should show as label |
| `valueKey`             | String  | **no**   | `value`                       | If `options` contain object, then which key should show as value |
| `clearable`            | Boolean | **no**   | `true`                        | If set `true`, clear icon will be shown when there is a value    |
| `autocomplete`         | String  | **no**   | ``                            | Field autocomplete attribute                                     |
| `name`                 | String  | **no**   | ``                            | Field name attribute                                             |
| `id`                   | String  | **no**   | ``                            | Field id attribute                                               |
| `helpText`             | String  | **no**   | ``                            | Field help text                                                  |
| `validationText`       | String  | **no**   | ``                            | Field validation text                                            |
| `hasError`             | Boolean | **no**   | `false`                       | If set `true`, field will show `validationText`                  |
| `hasSuccess`           | Boolean | **no**   | `false`                       | If set `true`, field will show success status                    |
| `disabled`             | Boolean | **no**   | `false`                       | If set `true`, field will be read only                           |
| `required`             | Boolean | **no**   | `false`                       | If set `true`, field must be filled                              |
| `searchable`           | Boolean | **no**   | `false`                       | If set `true`, a search input will be available to filter        |
| `closeOnSelect`        | Boolean | **no**   | `true`                        | If set `true`, on selecting value dropdown will be closed        |
| `clearSearchOnSelect`  | Boolean | **no**   | `true`                        | If set `true`, search value will be cleared on select            |
| `multiple`             | Boolean | **no**   | `false`                       | If set `true`, multiple value can be selected                    |
| `noOptionsText`        | String  | **no**   | `Sorry, no matching options.` | Text for no options text                                         |
| `singularSelectedText` | String  | **no**   | `item selected.`              | Placeholder text for singular selected options text              |
| `pluralSelectedText`   | String  | **no**   | `items selected.`             | Placeholder text for plural selected options text                |

## Listeners

The select component fires the following events:

**`onUpdateValue`**: When you choose a value

```html
<!-- element -->
<select-field onUpdateValue="handleChangeEvent" />

<!-- method -->
methods: { handleChangeEvent(value){ // Handle input event } }
```
