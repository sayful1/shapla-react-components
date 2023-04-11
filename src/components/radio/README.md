# Shapla Radio

A custom radio component that works like native radio component for React.

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

@include shapla.radio;
```

### Javascript Instantiation

```jsx
import {Radio} from "@shapla/react-components";

export default () => {

    const [option, setOption] = useState("one");
    "one";
    const options = [
        {label: "One", value: "one"},
        {label: "Two", value: "two"},
        {label: "Three", value: "three"},
    ];
    return (
        <>
            {
                options.map((_option) => (
                    <Radio
                        key={_option.value}
                        label={_option.label}
                        value={_option.value}
                        checked={option === _option.value}
                        onUpdateModelValue={setOption}
                    />
                ))}
        </>
    )

};
```

### Props

| Property             | Type     | Required | Default | Description              |
|----------------------|----------|----------|---------|--------------------------|
| `label`              | String   | **no**   | ``      | Radio label              |
| `value`              | String   | **no**   | ``      | Radio value              |
| `checked`            | Boolean  | **no**   | `false` | Radio checked            |
| `onUpdateModelValue` | Function | **no**   | ``      | Radio update model value |