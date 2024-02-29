import React from 'react';
import TablePagination, { TablePaginationProps } from '@mui/material/TablePagination';

const TablePaginationComponent: React.FC<TablePaginationProps> = (props) => {
  return <TablePagination {...props} />;
};

export default TablePaginationComponent;
