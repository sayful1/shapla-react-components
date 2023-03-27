import React, { FC } from "react";
import DataTableIcon from "./DataTableIcon";

interface Props {
onExpandClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const DataTableExpandCell: FC<Props> = ({ onExpandClick }) => {
return (
<td className="shapla-data-table__cell is-expand-toggle-cell">
<button
     type="button"
     className="data-table-toggle-button"
     aria-label="Show more details"
     onClick={onExpandClick}
   >
<DataTableIcon icon="expand-less" className="expand-triangle-up" />
<DataTableIcon icon="expand-more" className="expand-triangle-down" />
</button>
</td>
);
};

export default DataTableExpandCell;