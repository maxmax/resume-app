import React from 'react';
import TableContainer, { TableContainerProps } from '@mui/material/TableContainer';

interface TableContainerComponentProps extends TableContainerProps {}

const TableContainerComponent: React.FC<TableContainerComponentProps> = (props) => {
  return <TableContainer {...props} />;
};

export default TableContainerComponent;
