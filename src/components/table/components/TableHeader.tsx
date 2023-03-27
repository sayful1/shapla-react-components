import React, { ReactNode } from 'react';

interface TableHeaderProps {
  children?: ReactNode;
}

const TableHeader: React.FC<TableHeaderProps> = ({ children }) => {
  return (
    <thead>
      <tr className="shapla-data-table__header-row">
        {children}
      </tr>
    </thead>
  );
};

export default TableHeader;
