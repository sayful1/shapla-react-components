import React, { ReactNode } from 'react';
import TableHeaderCell from "./HeaderCell";

interface TableHeaderProps {
    children: ReactNode[],

}

const TableHeader = ({ children }: TableHeaderProps) => {
    return (
        <thead>
        <tr className="shapla-data-table__header-row">
            {children.map((child, index) => (
                <TableHeaderCell key={index} > {child}</TableHeaderCell>
            ))}
            {/*<div>{children}</div>*/}
        </tr>
        </thead>
    );
};

export default TableHeader;
