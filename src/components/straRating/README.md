# shapla-star-rating

A simple, highly customisable star rating component for React

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

@include shapla.star-rating;
```

### Javascript Instantiation

```jsx
import {StarRating} from "@shapla/vue-components";

export default () => {
    const [rating, setRating] = useState(4);
    const staticRating = 4.6;
    ret = (
        <div>
            <StarRating modelValue={rating} onUpdateModelValue={(v) => setRating(v)}/>
            <StarRating modelValue={staticRating} isStatic={true}/>
        </div>
    )
};
```

### Props

| Property        | Type     | Required | Default           | Description                                         |
|-----------------|----------|----------|-------------------|-----------------------------------------------------|
| `value`         | Number   | **yes**  | ``                | The initial rating                                  |
| `is-static`     | Boolean  | **no**   | `false`           | If set `true`, the rating cannot be edited.         |
| `color`         | String   | **no**   | ``                | The color of the non-highlighted portion of a star. |
| `active-color`  | String   | **no**   | ``                | The color of the highlighted portion of a star.     |
| `ratings`       | Array    | **no**   | `[1, 2, 3, 4, 5]` | List of rating value                                |
| `onUpdateValue` | Function | **no**   |                   | Active when value change                            |
