import React, { FC, ReactNode } from 'react';

interface Props {
  colspan?: number;
  children?: ReactNode;
}

const DataTableExpandRow: FC<Props> = ({ colspan = null, children }) => {
  return (
    <tr className="shapla-data-table__row" style={{ display: 'none' }}>
      <td className="shapla-data-table__cell is-expand-cell" colSpan={colspan ? colspan : undefined}>
        <div className="expand-cell-content">{children}</div>
      </td>
    </tr>
  );
};

export default DataTableExpandRow;
