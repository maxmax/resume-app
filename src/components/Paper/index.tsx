import React from 'react';
import Paper, { PaperProps } from '@mui/material/Paper';

const PaperComponent: React.FC<PaperProps> = (props) => {
  return <Paper {...props} />;
};

export default PaperComponent;