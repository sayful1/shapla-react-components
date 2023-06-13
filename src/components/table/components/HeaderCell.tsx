import React, { FC, ReactNode, useEffect, useState } from "react";
import DataTableIcon from "./DataTableIcon";
import { TableColumnDataInterface } from "../TableInterfaces";

interface TableHeaderCellProps {
  column?: TableColumnDataInterface;
  isPrimary?: boolean;
  isCheckbox?: boolean;
  isExpandToggle?: boolean;
  sortBy?: string;
  sortOrder?: string;
  showText?: boolean;
  children?: ReactNode;
  onSort?: (key: string) => void;
}

const TableHeaderCell: FC<TableHeaderCellProps> = ({
  column = { key: "", label: "" },
  isPrimary = false,
  isCheckbox = false,
  isExpandToggle = false,
  sortBy = "id",
  sortOrder = "desc",
  showText = false,
  children,
  onSort,
}) => {
  const handleSort = () => onSort && onSort(column.key);

  const [isNumeric, setIsNumeric] = useState(false);
  useEffect(() => {
    setIsNumeric(
      typeof column.numeric !== "undefined" && column.numeric === true
    );
  }, [column]);
  const [isSortable, setIsSortable] = useState(false);

  useEffect(() => {
    setIsSortable(
      typeof column.sortable !== "undefined" && column.sortable === true
    );
  }, [column]);

  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    setIsSorted(column.key === sortBy);
  }, [column.key, sortBy]);

  const [isSortedAsc, setIsSortedAsc] = useState(false);
  const [isSortedDesc, setIsSortedDesc] = useState(false);

  useEffect(() => {
    setIsSortedAsc(sortOrder === "asc");
  }, [sortOrder]);

  useEffect(() => {
    setIsSortedDesc(sortOrder === "desc");
  }, [sortOrder]);

  const [headCellClass, setHeadCellClass] = useState(
    "shapla-data-table__header-cell"
  );

  useEffect(() => {
    const newClasses = [headCellClass];

    if (column && column.key)
      newClasses.push(`shapla-data-table__header-cell-${column.key}`);
    if (isPrimary) newClasses.push("column-primary");
    if (isCheckbox) newClasses.push("is-checkbox-cell");
    if (isExpandToggle) newClasses.push("is-expand-toggle-cell");
    if (isNumeric) newClasses.push("is-numeric-cell");
    if (isSortable) {
      newClasses.push("is-sortable");
      if (isSorted) newClasses.push("is-sorted");
      if (isSortedAsc) newClasses.push("is-sorted-ascending");
      if (isSortedDesc) newClasses.push("is-sorted-descending");
    }

    setHeadCellClass(newClasses.join(" "));
  }, [
    column,
    isPrimary,
    isCheckbox,
    isExpandToggle,
    isNumeric,
    isSortable,
    isSorted,
    isSortedAsc,
    isSortedDesc,
  ]);

  return (
    <th className={headCellClass} role="columnheader" scope="col">
      {showText ? (
        children
      ) : !isSortable ? (
        <a href="#" onClick={handleSort}>
          {isSortedDesc && (
            <DataTableIcon icon="arrow-upward" className="sort-icon" />
          )}
          {isSortedAsc && (
            <DataTableIcon icon="arrow-downward" className="sort-icon" />
          )}
          <span>{column.label}</span>
        </a>
      ) : (
        <span>{column.label}</span>
      )}
    </th>
  );
};

export default TableHeaderCell;
