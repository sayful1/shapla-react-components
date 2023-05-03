import { ReactNode } from "react";

export interface TableActionDataInterface {
  key: string;
  label: string;
}

export interface TableColumnDataInterface {
  key: string;
  label: string;
  numeric?: boolean;
  sortable?: boolean;
}

export interface ItemInterface {
  [key: string | number]: string | number | boolean;
}
export interface TableProps {
  items: ItemInterface[];
  columns: TableColumnDataInterface[];
  selectedItems?: number[];
  actions?: TableActionDataInterface[];
  index?: string;
  showCb?: boolean;
  selectAllText?: string;
  notFoundText?: string;
  sortBy?: string;
  sortOrder?: string;
  mobileWidth?: number;
  areaLabel?: string;
  showExpand?: boolean;
  children?: ReactNode;
  showText?: boolean;
  onActionClick?: (action: string, row: ItemInterface) => void;
  onSortClick?: (column: string, sortOrder: string) => void;
  onItemSelect?: (selectedItems: number[]) => void;
  onRowClick?: (row: ItemInterface) => void;
}
