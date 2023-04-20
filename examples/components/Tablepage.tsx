import React, { useState } from "react";
import { ShaplaTable, ShaplaTablePagination as Pagination } from "../../src";
import DocTab from "./components/DocTab";
import { ItemInterface } from "../../src/components/table/TableInterfaces";
import StatusList from "../../src/components/table/components/StatusList";
const ShaplaTableDoc = () => {
  const properties = {
    items: { type: Array, required: true },
    columns: { type: Array, required: true },
    selectedItems: { type: Array, required: false, default: [] },
    actions: { type: Array, required: false, default: [] },
    showCb: { type: Boolean, required: false, default: true },
    notFoundText: { type: String, required: false, default: "No items found." },
    sortBy: { type: String, required: false, default: "id" },
    sortOrder: { type: String, required: false, default: "desc" },
    mobileWidth: { type: Number, required: false, default: 768 },
    areaLabel: { type: String, required: false, default: "" },
    showExpand: { type: Boolean, required: false, default: false },
    onActionClick: { type: Function, required: false, default: null },
    onItemSelect: { type: Function, required: false, default: null },
    onRowClick: { type: Function, required: false, default: null },
    onSortClick: { type: Function, required: false, default: null },
  };
  const description = {};
  const statuses = [
    { key: "all", label: "All", count: 11, active: true },
    { key: "active", label: "Active", count: 9, active: false },
    { key: "trash", label: "Trash", count: 2, active: false },
  ];
  const columns = [
    { key: "title", label: "Title", numeric: false },
    { key: "bangle", label: "Bangle", numeric: true },
    { key: "english", label: "English", numeric: true },
    { key: "math", label: "Math", numeric: true, sortable: true },
  ];
  const items = [
    { id: 1, title: "Sayful Islam", bangle: 70, english: 80, math: 100 },
    { id: 2, title: "Akhi", bangle: 70, english: 80, math: 90 },
    { id: 3, title: "Saif Al Araf", bangle: 70, english: 80, math: 80 },
  ];
  const actions = [
    { key: "edit", label: "Edit" },
    { key: "trash", label: "Delete" },
  ];
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(20);
  const [totalItems] = useState(100);
  const [sortBy, setSortBy] = useState("math");
  const [sortOrder, setSortOrder] = useState("asc");

  const paginate = (page: number) => {
    setCurrentPage(page);
  };
  const changeStatus = (status: {
    key: string;
    label: string;
    count: number;
    active: boolean;
  }) => {
    statuses.filter((item) => {
      item.active = item.key === status.key;
    });
  };
  const sortData = (column: string, order: string) => {
    setSortBy(column);
    setSortOrder(order);
    if ("asc" === order) {
      items.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return a[column] - b[column];
      });
    } else {
      items.sort(function (a, b) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return b[column] - a[column];
      });
    }
  };
  const onActionClick = (action: string, row: ItemInterface) => {
    if ("trash" === action) {
      if (confirm("Are you sure to delete?")) {
        alert("deleted: " + row.title);
      }
    }
  };
  const onRowClick = (row: ItemInterface) => {
    console.log("Row clicked: ", row);
  };
  return (
    <DocTab
      heading="Data Table"
      slug="shapla-table"
      name="ShaplaTable"
      scssMixin="data-table"
      properties={properties}
      desc={description}
    >
      <div>
        <h2>Demo Table One</h2>
        <ShaplaTable
          items={items}
          columns={columns}
          actions={actions}
          selectedItems={selectedItems}
          onItemSelect={(Items) => setSelectedItems(Items)}
          onActionClick={onActionClick}
          onRowClick={onRowClick}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortClick={sortData}
        />
        <h2>Demo Table Two (No items)</h2>
        <ShaplaTable
          items={[]}
          columns={columns}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortClick={sortData}
          selectedItems={selectedItems}
          onItemSelect={(Items) => setSelectedItems(Items)}
          actions={actions}
          onActionClick={onActionClick}
          onRowClick={onRowClick}
        />
        <h2>Demo Table One</h2>
        <div style={{ marginBottom: "1rem", display: "flex" }}>
          <StatusList statuses={statuses} onChange={changeStatus} />
        </div>
        <ShaplaTable
          items={items}
          columns={columns}
          actions={actions}
          selectedItems={selectedItems}
          onItemSelect={(Items) => setSelectedItems(Items)}
          onActionClick={onActionClick}
          onRowClick={onRowClick}
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSortClick={sortData}
        ></ShaplaTable>

        <Pagination
          currentPage={currentPage}
          perPage={perPage}
          totalItems={totalItems}
          paginate={paginate}
        />
      </div>
    </DocTab>
  );
};
export default ShaplaTableDoc;
