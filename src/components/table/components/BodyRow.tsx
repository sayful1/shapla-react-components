import React, { FC, ReactNode, SyntheticEvent } from "react";

interface Props {
  children: ReactNode;
  onClick : (event: SyntheticEvent) => void;
}

const DataTableRow: FC<Props> = ({ children,onClick }) => {
  return (
    <tr onClick={onClick} className="shapla-data-table__row">
      {children}
    </tr>
  );
};

export default DataTableRow;
