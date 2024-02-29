import React from 'react';
import TableBody, { TableBodyProps } from '@mui/material/TableBody';

interface TableBodyComponentProps extends TableBodyProps {}

const TableBodyComponent: React.FC<TableBodyComponentProps> = (props) => {
  return <TableBody {...props} />;
};

export default TableBodyComponent;