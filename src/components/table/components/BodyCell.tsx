import React, { FC, ReactNode,useEffect, useState } from "react";
import { ItemInterface, TableActionDataInterface, TableColumnDataInterface } from "../TableInterfaces";
import DataTableIcon from "./DataTableIcon";

interface Props {
  item: ItemInterface;
  column: TableColumnDataInterface;
  actions?: TableActionDataInterface[];
  isPrimary?: boolean;
  isMobile?: boolean;
  showText?:boolean;
  children? :ReactNode;
  onClickToggle?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickAction?: (key: string, item: ItemInterface) => void;
}

const DataTableCell: FC<Props> = ({
  item,
  column,
  actions = [],
  isPrimary = false,
  isMobile = false,
  showText,
  children,
  onClickToggle,
  onClickAction,
}) => {
// const [bodyCellClass, setBodyCellClass] = useState<(string | null)[]>([]);
const [isNumeric, setIsNumeric] = useState(false);

  useEffect(() => {
    setIsNumeric(typeof column.numeric !== "undefined" && column.numeric === true);
  }, [column]);
  // useEffect(() => {
  //   const newBodyCellClass = [
  //     "shapla-data-table__cell",
  //     `shapla-data-table__cell-${column.key}`,
  //     isNumeric ? "is-numeric-cell" : null,
  //     isPrimary ? "column-primary" : "",
  //   ].filter(Boolean);
  
  //   setBodyCellClass(newBodyCellClass);
  // }, [column.key, isNumeric, isPrimary]);
    const bodyCellClass = [
      "shapla-data-table__cell",
      `shapla-data-table__cell-${column.key}`,
      isNumeric ? "is-numeric-cell" : null,
      isPrimary ? "column-primary" : null,
    ].filter(Boolean);

  return (
    <td data-colname={column.label} className={bodyCellClass.join(" ")}>
      {item[column.key]}
      {isPrimary && (
        <React.Fragment>
          {actions.length > 0 && (
            <div className="row-actions">
              {
                showText ?children :  
              <span>
                {actions.map((action) => (
                  <a
                  key={action.key}
                  className={action.key}
                  href="#"
                  onClick={(event) => onClickAction?.(action.key, item)}
                  >
                    {action.label}
                  </a>
                ))}
              </span>
              }
            </div>
          )}
          {isMobile && (
            <button
              className="data-table-toggle-button"
              aria-label="Show more details"
              onClick={onClickToggle}
            >
              <DataTableIcon icon="expand-less" className="triangle-up" />
              <DataTableIcon icon="expand-more" className="triangle-down" />
            </button>
          )}
        </React.Fragment>
      )}
    </td>
  );
};

export default DataTableCell;
