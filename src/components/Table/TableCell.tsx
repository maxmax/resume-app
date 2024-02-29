import React from 'react';
import TableCell, { TableCellProps } from '@mui/material/TableCell';

interface TableCellComponentProps extends TableCellProps {}

const TableCellComponent: React.FC<TableCellComponentProps> = (props) => {
  return <TableCell {...props} />;
};

export default TableCellComponent;
