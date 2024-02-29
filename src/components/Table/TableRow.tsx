import React from 'react';
import TableRow, { TableRowProps } from '@mui/material/TableRow';

interface TableRowComponentProps extends TableRowProps {}

const TableRowComponent: React.FC<TableRowComponentProps> = (props) => {
  return <TableRow {...props} />;
};

export default TableRowComponent;
