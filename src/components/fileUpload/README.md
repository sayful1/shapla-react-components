# Shapla File Uploader

A component for handling drag and drop file upload functionality for React.

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

@include shapla.file-uploader;
```

### Javascript Instantiation

```jsx
import { ShaplaFileUploader } from "@shapla/react-components";

export default () => {
  const handleSuccess = (fileObject, serverResponse) => {
    // Handle click event
  };
  return <shapla-file-uploader onSuccess="handleSuccess" />;
};
```

### Props

| Property                | Type     | Required | Default                         | Description                                                  |
| ----------------------- | -------- | -------- | ------------------------------- | ------------------------------------------------------------ |
| `url`                   | String   | **yes**  | `null`                          | File upload url                                              |
| `method`                | String   | **no**   | `POST`                          | File upload method                                           |
| `paramName`             | String   | **no**   | `file`                          | File upload parameter name                                   |
| `textLineOne`           | String   | **no**   | `Drag &amp; drop files`         | Placeholder first line text                                  |
| `textLineTwo`           | String   | **no**   | `or`                            | Placeholder second line text                                 |
| `textButton`            | String   | **no**   | `Select files to upload`        | Button text                                                  |
| `textMaxUploadLimit`    | String   | **no**   | `Maximum upload file size: 2MB` | Max upload limit text                                        |
| `params`                | Object   | **no**   | `{}`                            | An object of additional parameters to transfer to the server |
| `showFileUploadStatus`  | Boolean  | **no**   | `true`                          | If set `true`, individual file upload status will be shown   |
| `showFilesUploadStatus` | Boolean  | **no**   | `true`                          | If set `true`, all files upload status will be shown         |
| `onSuccess`             | Function | **no**   | `()=>{}`                        | Invoke when file Successfully uploaded                       |
| `onFail`                | Function | **no**   | `()=>{}`                        | Invoke if file Crashed or cancelled                          |
