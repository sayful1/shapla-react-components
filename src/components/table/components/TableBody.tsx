import React, { ReactNode } from 'react';

interface DataTableProps {
  children?: ReactNode;
}

const DataTable: React.FC<DataTableProps> = ({ children }) => {
  return (
    <tbody className="shapla-data-table__content">
      {children}
    </tbody>
  );
};

export default DataTable;
