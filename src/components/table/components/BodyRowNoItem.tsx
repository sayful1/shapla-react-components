import React, { FC,ReactNode } from "react";

type Props = {
  colspan?: number | undefined;
  children: ReactNode;
};

const TableRow: FC<Props> = ({ colspan, children }) => {
  return (
    <tr className="shapla-data-table__row no-items">
      <td
        colSpan={colspan}
        className="shapla-data-table__cell has-no-item"
      >
        {children}
      </td>
    </tr>
  );
};

export default TableRow;
