import React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const LinearProgressComponent: React.FC<LinearProgressProps> = (props) => {
  return <LinearProgress {...props} />;
};

export default LinearProgressComponent;
