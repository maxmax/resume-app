import React from 'react';
import Table, { TableProps } from '@mui/material/Table';

interface TableComponentProps extends TableProps {}

const TableComponent: React.FC<TableComponentProps> = (props) => {
  return <Table {...props} />;
};

export default TableComponent;
