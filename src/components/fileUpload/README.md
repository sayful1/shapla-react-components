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
import {ShaplaFileUploader} from "@shapla/react-components";

export default () => {
    const handleSuccess = (fileObject, serverResponse) => {
        // Handle click event
    };
    return (
        <shapla-file-uploader onSuccess="handleSuccess"/>
    )
};
```

### Props

| Property                | Type     | Required | Default                         | Description                                                  |
|-------------------------|----------|----------|---------------------------------|--------------------------------------------------------------|
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
| `onSuccess`             | Function | **no**   | `()=>{}`                        | Invock when file Successfully uploaded                       |
| `onFail`                | Function | **no**   | `()=>{}`                        | Invock if file Crashed or cancelld                           |

## Listeners

The uploader component fires the following events:

**`init`**: It fires the event when a file initiate to upload. `FormData` pass as parameter.

**`before:send`**: It fires the event before sending data to server. `XMLHttpRequest` pass as first parameter
and `FormData` pass as second parameter.

**`progress`**: It fires the event when a file upload in progress. `fileObject` object pass as first parameter
and `event` pass as second parameter.

**`success`**: It fires the event when a file uploaded successfully. `fileObject` object pass as first parameter
and `serverResponse` pass as second parameter.

**`fail`**: It fires the event when a file uploaded failed on server. `fileObject` object pass as first parameter
and `serverResponse` pass as second parameter.

**`error`**: It fires the event when a file uploaded failed. `fileObject` object pass as first parameter.

```vue
<!-- template -->
<shapla-file-uploader
    @before:send="handleBeforeSendEvent"
    @success="handleSuccess"
/>

<!-- method -->
methods: { handleBeforeSendEvent(xhr,formData){ // You can add custom header to
xhr xhr.setRequestHeader('Authorization', 'authorization code goes here'); },
handleSuccess(fileObject,serverResponse){ // Handle click event } }
```
