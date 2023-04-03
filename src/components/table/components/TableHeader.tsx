// import React, { ReactNode } from 'react';
// //
// interface TableHeaderProps {
//   children: ReactNode[]
// }
// const TableHeader = ({ children } :TableHeaderProps) => {
//   return (
//     <thead>
//       <tr className="shapla-data-table__header-row">
//           {children}
//       </tr>
//     </thead>
//   );
// };
//
//
//
//
//
//
// export default TableHeader
import React, { ReactNode } from 'react';
import TableHeaderCell from "./HeaderCell";

interface TableHeaderProps {
    children: ReactNode[]
}

const TableHeader = ({ children }: TableHeaderProps) => {
    return (
        <thead>
        <tr className="shapla-data-table__header-row">
            {children.map((child, index) => (
                <TableHeaderCell key={index} > {child}</TableHeaderCell>
            ))}
        </tr>
        </thead>
    );
};

export default TableHeader;
