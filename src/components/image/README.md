# Shapla Image Container

The image container to specify a precisely sized container so that your layout isn't broken because of image loading or image errors.

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

@include shapla.image-container;
```

### Javascript Instantiation

```jsx
import { ImageContainer } from "@shapla/react-components";
export default () => {
  return (
    <ImageContainer containerWidth="32px" containerHeight="32px" isRounded>
      <img src="https://via.placeholder.com/48x48" />
    </ImageContainer>
  );
};
```

```html
<ImageContainer containerWidth="32px" containerHeight="32px" isRounded>
  <img src="https://via.placeholder.com/48x48" />
</ImageContainer>

<ImageContainer widthRatio="{3}" heightRatio="{4}">
  <img src="https://via.placeholder.com/420x560" />
</ImageContainer>

<ImageContainer widthRatio="{16}" heightRatio="{9}">
  <iframe
    width="640"
    height="360"
    src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
    frameborder="0"
    allowfullscreen
  ></iframe>
</ImageContainer>
```

### Props

| Property          | Type    | Required | Default | Description                                       |
| ----------------- | ------- | -------- | ------- | ------------------------------------------------- |
| `heightRatio`     | Number  | **no**   | `1`     | Image height ratio. You can also put image height |
| `widthRatio`      | Number  | **no**   | `1`     | Image width ratio. You can also put image width   |
| `containerWidth`  | String  | **no**   | ``      | Width of the container.                           |
| `containerHeight` | String  | **no**   | ``      | Height of the container.                          |
| `isRounded`       | Boolean | **no**   | `false` | If set `true`, inside item will be rounded        |
