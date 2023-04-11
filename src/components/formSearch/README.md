# shapla-search-form

A simple search form design for React.

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
import {SearchForm} from "@shapla/vue-components";

export default () => {

    const searchInput = (value) => {
        // Handle input event
    }
    const searchSubmit = (value) => {
        // Handle input event
    }
    return (
        <SearchForm
            onInput="searchInput"
            onSearch="searchSubmit"
        />
    )
};
```

### Props

| Property           | Type   | Required | Default       | Description                                             |
|--------------------|--------|----------|---------------|---------------------------------------------------------|
| `value`            | String | **no**   | ``            | Search value                                            |
| `fontSize`         | String | **no**   | ``            | Form base font size. This can be used to control height |
| `placeholder`      | String | **no**   | `Search …`    | Input placeholder text                                  |
| `screenReaderText` | String | **no**   | `Search for:` | Screen reader text                                      |

## Listeners

The component fires the following events:

**`onInput`**: When user type, it fires the event with value.
**`onSearch`**: When search is clicked, it fires the event with value.

```html
<!-- jsx -->
<SearchForm onInput="searchInput" onSearch="searchSubmit"></SearchForm>

<!-- method -->
const searchInput =(value) =>{ // Handle input event };
const searchSubmit = (value) =>{ //
Handle input event } }
```
