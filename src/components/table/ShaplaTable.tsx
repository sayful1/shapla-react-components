import React, { useEffect, useState} from "react";
import {TableColumnDataInterface, TableProps} from "./TableInterfaces";
import TableHeaderCell from "./components/HeaderCell";
import ShaplaCheckbox from "../checkbox/Checkbox";
import TableBody from "./components/TableBody";
import BodyRow from "./components/BodyRow";
import BodyCell from "./components/BodyCell";
import BodyCellExpand from "./components/BodyCellExpand";
import BodyRowExpand from "./components/BodyRowExpand";
import BodyRowNoItem from "./components/BodyRowNoItem";
import "./table.scss";
import TableHeader from "./components/TableHeader";

const ShaplaTable = ({
                         items,
                         columns,
                         selectedItems = [],
                         actions = [],
                         showCb = true,
                         notFoundText = "No items found.",
                         sortBy = "id",
                         sortOrder = "desc",
                         mobileWidth = 768,
                         areaLabel = "",
                         showExpand = false,
                         children,
                         onActionClick,
                         onItemSelect,
                         onRowClick,
                         onSortClick,
                     }: TableProps) => {
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const [isMobileView, setIsMobileView] = useState(windowWidth <= mobileWidth);
    // let table = useRef<HTMLTableElement>(null);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        setIsMobileView(windowWidth <= mobileWidth);
    }, [windowWidth, mobileWidth]);

    const [selectAll, setSelectAll] = React.useState(false);
    // const [newSelect, setNewSelect] = React.useState(false);

    const selectAllItems = () => {
        let Items: number[];
        if (!selectAll) {
            Items = items.map((item) => item.id as number);
            setSelectAll(true);
        } else {
            Items = [];
            // setSelectAll(false);
        }
        onItemSelect && onItemSelect(Items);


    };
    const selectItem = (id: number) => {
        let Items = [...selectedItems];
        if (Items.includes(id)) {
            Items = Items.filter((item) => item !== id);
        } else {
            Items.push(id);
        }
        // setNewSelect(true);
        onItemSelect && onItemSelect(Items);

    };
    useEffect(() => {
        if (selectedItems && selectedItems.length === items.length) {
            setSelectAll(true);
        } else {
            setSelectAll(false);
        }

    }, [selectedItems]);
    const [actionColumn, setActionColumn] = useState<string>("");

    useEffect(() => {
        let column = "title";
        columns.forEach((col: TableColumnDataInterface, index: number) => {
            if (index === 0) column = col.key;
        });
        setActionColumn(column);
    }, [columns]);
    const [colspan, setColspan] = useState(0);

    useEffect(() => {
        let columnsCount = columns.length;
        if (showCb) columnsCount += 1;
        if (showExpand) columnsCount += 1;

        setColspan(columnsCount);
    }, [columns, showCb, showExpand]);
    // const [tableClasses, setTableClasses] = useState<string[]>([]);

    // useEffect(() => {
    //     const classes = ["shapla-data-table-container"];
    //     if (isMobileView) classes.push("shapla-data-table--mobile");
    //     setTableClasses(classes);
    //
    // }, [isMobileView]);

    const toggleExpandRow = (event: Event) => {
        const el = event.target as HTMLElement,
            tr = el.closest("tr"),
            nextTr = tr?.nextElementSibling as HTMLElement,
            up = tr?.querySelector(".expand-triangle-up") as HTMLElement,
            down = tr?.querySelector(".expand-triangle-down") as HTMLElement;

        if ("none" === nextTr?.style.display) {
            nextTr.style.display = "";
            up.style.display = "block";
            down.style.display = "none";
        } else {
            up.style.display = "none";
            nextTr.style.display = "none";
            down.style.display = "block";
        }
    };

    const toggleRow = (event: Event) => {
        const el = event.target as HTMLElement,
            tr = el.closest("tr"),
            table = el.closest("table");
        table?.querySelectorAll("tr").forEach((element: HTMLTableRowElement) => {
            if (element.classList.contains("is-expanded") && element !== tr) {
                element.classList.remove("is-expanded");
            }
        });

        setTimeout(() => tr?.classList.toggle("is-expanded"), 50);
    };
    return (
        <table className="shapla-data-table" aria-label={areaLabel}>
            <TableHeader>
                {showCb &&
                    (
                        <TableHeaderCell showText={true} is-checkbox={true}>
                            {
                                selectAll &&
                                <ShaplaCheckbox
                                    id="cb-select-all-1"
                                    checked={true}
                                    onChange={selectAllItems}
                                />
                            }
                            {
                                !selectAll &&
                                <ShaplaCheckbox
                                    id="cb-select-all-1"
                                    checked={false}
                                    onChange={selectAllItems}
                                />
                            }
                        </TableHeaderCell>
                    )
                }
                {columns.map((column) => (
                    actions.length ? (
                    <TableHeaderCell
                        key={column.key}
                        column={column}
                        sort-by={sortBy}
                        sort-order={sortOrder}
                        is-primary={actionColumn === column.key}
                        onSort={() => {
                            onSortClick && onSortClick(column.key, sortOrder === "asc" ? "desc" : "asc")
                        }}
                    />
                ):(<TableHeaderCell
                    key={column.key}
                    column={column}
                    sort-by={sortBy}
                    sort-order={sortOrder}
                    is-primary={actionColumn === column.key}
                    onSort={() => {
                        onSortClick && onSortClick(column.key, sortOrder === "asc" ? "desc" : "asc")
                    }}
                />)
                )

                )}
                {showExpand && (
                    <TableHeaderCell is-expand-toggle={true}/>
                )
                }
            </TableHeader>
            <TableBody>
                {
                    items.length ?
                        items.map((item, index) => {
                            return (
                                <BodyRow key={index} onClick={() => {
                                    onRowClick && onRowClick(item)
                                }}>
                                    {
                                        showCb &&
                                        <td className="shapla-data-table__cell is-checkbox-cell">
                                            {
                                                selectedItems && selectedItems.includes(item.id as number) &&
                                                <ShaplaCheckbox id="cb-select-1"
                                                                value={item[index] as number}
                                                                checked={true}
                                                                onChange={() => selectItem(item.id as number)}/>
                                            }
                                            {
                                                selectedItems && !selectedItems.includes(item.id as number) &&
                                                <ShaplaCheckbox id="cb-select-1"
                                                                checked={false}
                                                                onChange={() => selectItem(item.id as number)}/>
                                            }
                                        </td>
                                    }
                                    {
                                        columns.map((column, index) => {
                                            return (
                                                <BodyCell
                                                    key={index}
                                                    column={column}
                                                    item={item}
                                                    actions={actions}
                                                    isPrimary={actionColumn === column.key}
                                                    is-mobile={isMobileView}
                                                    onClickAction={(e) => onActionClick && onActionClick(e, item)}
                                                    onClickToggle={(e: Event) => toggleRow(e)}
                                                >
                                                    {item[column.key]}
                                                </BodyCell>
                                            )
                                        })
                                    }
                                    {showExpand && (
                                        <BodyCellExpand
                                            onExpandClick={(e: Event) => toggleExpandRow(e)}
                                        />
                                    )}
                                    {showExpand && (
                                        <BodyRowExpand
                                            key={`${item[index]}-expand`}
                                            colspan={colspan}
                                        >
                                            {React.Children.toArray(children)[1]}

                                        </BodyRowExpand>
                                    )}
                                </BodyRow>
                            )
                        })
                        :
                        <BodyRowNoItem colspan={columns.length+1}>
                            {notFoundText}
                        </BodyRowNoItem>
                }

            </TableBody>

        </table>

    )
}
export default ShaplaTable;
