import React from 'react';
import TableHead, { TableHeadProps } from '@mui/material/TableHead';

interface TableHeadComponentProps extends TableHeadProps {}

const TableHeadComponent: React.FC<TableHeadComponentProps> = (props) => {
  return <TableHead {...props} />;
};

export default TableHeadComponent;
