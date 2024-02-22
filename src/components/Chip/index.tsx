import React from 'react';
import Chip, { ChipProps } from '@mui/material/Chip';

const ChipComponent: React.FC<ChipProps> = (props) => {
  return <Chip {...props} />;
};

export default ChipComponent;