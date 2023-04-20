# Shapla Data Table

A simple responsive data table component for React

Supports:

- Row Actions with children
- Custom Column children Support
- Sorting

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

@include shapla.checkbox;
@include shapla.data-table;
```

### Javascript Instantiation

```jsx
import { ShaplaTable } from "@shapla/react-components";

export default () => {
  const selectedItems = [];
  const columns = [
    { key: "title", label: "Title", sortable: true },
    { key: "author", label: "Author" },
  ];
  const actions = [
    { key: "edit", label: "Edit" },
    { key: "trash", label: "Delete" },
  ];
  const items = [
    {
      id: 1,
      title: "Wings of Fire: An Autobiography",
      author: ["A.P.J. Abdul Kalam"],
      image: "https://images.gr-assets.com/books/1295670969l/634583.jpg",
    },
    {
      id: 2,
      title: "Who Moved My Cheese?",
      author: ["Spencer Johnson", "Kenneth H. Blanchard"],
      image: "https://images.gr-assets.com/books/1388639717l/4894.jpg",
    },
    {
      id: 3,
      title: "Option B",
      author: ["Sheryl Sandberg", "Adam Grant", "Adam M. Grant"],
      image: "https://images.gr-assets.com/books/1493998427l/32938155.jpg",
    },
  ];

  return (
    <ShaplaTable
      columns={columns}
      items={items}
      actions={actions}
      selectedItems={selectedItems}
      actionColumn="title"
      showCb={true}
      index="id"
      sortBy="title"
      sortOrder="asc"
      selectAllText="Select All"
      notFoundText="No items found."
      mobileWidth={768}
    />
  );
};
```

### Props

| Property        | Type     | Required | Default           | Description                                                             |
| --------------- | -------- | -------- | ----------------- | ----------------------------------------------------------------------- |
| `items`         | Array    | **yes**  | `null`            | Pass an **Array** of **Objects** with key:value format.                 |
| `columns`       | Array    | **yes**  | `null`            | Pass an **Array** of **Objects**. See _columns data object_             |
| `selectedItems` | Array    | no       | `[]`              | Pass an **Array** of object id                                          |
| `actions`       | Array    | no       | `[]`              | If you want to show row actions, pass an **Array** of **Objects**       |
| `actionColumn`  | String   | no       | `title`           | Define which is the action column so we could place action items there. |
| `index`         | String   | no       | `id`              | The index identifier of the row                                         |
| `showCb`        | Boolean  | no       | `true`            | Whether to show the bulk checkbox in each rows                          |
| `selectAllText` | String   | no       | `Select All`      | Shows if no items are found                                             |
| `notFoundText`  | String   | no       | `No items found.` | Shows if no items are found                                             |
| `sortBy`        | String   | no       | `null`            | The property in data on which to initially sort.                        |
| `sortOrder`     | String   | no       | `asc`             | The initial sort order.                                                 |
| `mobileWidth`   | Number   | no       | `768`             | Mobile breakpoint for table.                                            |
| `onActionClick` | Function | no       | ()=> {}           | do something on alick action                                            |
| `onItemSelect`  | Function | no       | ()=> {}           | do something on Item selection                                          |
| `onRowClick`    | Function | no       | ()=> {}           | do something on Row click                                               |
| `onSortClick`   | Function | no       | ()=> {}           | do something on cilck sortIcon                                          |

### columns data object

| Property   | Type    | Required | Default | Description                                                     |
| ---------- | ------- | -------- | ------- | --------------------------------------------------------------- |
| `key`      | String  | **yes**  | ``      | Column key.                                                     |
| `label`    | String  | **yes**  | ``      | Column label                                                    |
| `numeric`  | Boolean | no       | `false` | Set `true` if table column data type is numeric.                |
| `sortable` | Boolean | no       | `false` | Whether the column data can be sorted by `asc` or `desc` order. |

### actions data object

| Property | Type   | Required | Default | Description  |
| -------- | ------ | -------- | ------- | ------------ |
| `key`    | String | **yes**  | ``      | Action key   |
| `label`  | String | **yes**  | ``      | Action label |

## Listeners

The table component fires the following events:

**`onActionClick`**: When a row action is clicked, it fires the event. The action name and the current row will be passed.

```html
<!-- jsx -->
<ShaplaTable onActionClick="{onActionClick}"> </ShaplaTable>

<!-- method -->
methods: { onActionClick(action, row) { if ( 'trash' === action ) { if (
confirm('Are you sure to delete?') ) { alert('deleted: ' + row.title); } } } }
```

**onSortClick**: When a sorted column is clicked

```html
<!-- jsx -->
<ShaplaTable onSortClickt="{sortCallback}"> </ShaplaTable>

<!-- method -->
methods: { sortCallback(column, order) { this.sortBy = column; this.sortOrder =
order; // this.loadItems(column, order); } }
```

**onItemSelect**: When an item or all items are selected. Array of selected items will be passed.

```html
<!-- jsx -->
<ShaplaTable onItemSelect={onItemSelect"> </ShaplaTable>

<!-- method -->
methods: { onItemSelect(ids) { this.selectedItems = ids; } }
```

### Extra components

<details>
<summary>Pagination</summary>

```jsx
import { Pagination } from "@shapla/react-table";

export default () => {
  const paginate = (nextPage) => {
    // Handle pagination event
  };
  return <pagination paginate={paginate}></pagination>;
};
```

```html
<pagination @paginate="paginate"></pagination>
```

#### Props

| Property           | Type     | Required | Default         | Description                                                                |
| ------------------ | -------- | -------- | --------------- | -------------------------------------------------------------------------- |
| `totalItems`       | Number   | **Yes**  | `0`             | Total number of items.                                                     |
| `perPage`          | Number   | **Yes**  | `20`            | Number of items to show per page.                                          |
| `currentPage`      | Number   | **Yes**  | `1`             | Current page number.                                                       |
| `size`             | String   | **No**   | `default`       | Pagination button size. Value can be `default`, `small`, `medium`, `large` |
| `textName`         | String   | **No**   | `items`         | Plural name of item.                                                       |
| `textNameSingular` | String   | **No**   | `item`          | Singular name of item.                                                     |
| `textCurrentPage`  | String   | **No**   | `Current Page`  | Screen reader text for current page.                                       |
| `textFirstPage`    | String   | **No**   | `First Page`    | Screen reader text for first page.                                         |
| `textPreviousPage` | String   | **No**   | `Previous Page` | Screen reader text for previous page.                                      |
| `textNextPage`     | String   | **No**   | `Next Page`     | Screen reader text for next page.                                          |
| `textLastPage`     | String   | **No**   | `Last Page`     | Screen reader text for last page.                                          |
| `textOf`           | String   | **No**   | `of`            | Screen reader text for 'of' text.                                          |
| `poaginate`        | Function | **yes**  | `()=>{}`        | Handle pagination event.                                                   |

#### Listeners

The pagination component fires the following events:

**`paginate`**: When any navigation icon is clicked, it fires the event and it gives current page number.

```html
<!-- jsx -->
<pagination @paginate="paginate"></pagination>

<!-- method -->
methods: { paginate(NextPage){ // Handle click event } }
```

</details>

<details>
<summary>Status List</summary>

```jsx
import { StatusList } from "@shapla/vue-components";

export default () => <StatusList statuses={statuses} />;
```

#### Props

| Property   | Type   | Required | Default      | Description                                                  |
| ---------- | ------ | -------- | ------------ | ------------------------------------------------------------ |
| `type`     | String | **no**   | `horizontal` | set `vertical` to see vertical design                        |
| `statuses` | Array  | **no**   | `[]`         | Pass an **Array** of **Objects**. See _statuses data object_ |

#### statuses data object

| Property | Type    | Required | Default | Description                                |
| -------- | ------- | -------- | ------- | ------------------------------------------ |
| `key`    | String  | **yes**  | ``      | Status key.                                |
| `label`  | String  | **yes**  | ``      | Status label                               |
| `active` | Boolean | **yes**  | ``      | If set `true`, status will be highlighted. |
| `count`  | Number  | **yes**  | ``      | How many items has for current status.     |

</details>
