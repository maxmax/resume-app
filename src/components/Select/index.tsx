import React from 'react';
import Select, { SelectProps, SelectChangeEvent } from '@mui/material/Select';

interface SelectComponentProps extends Omit<SelectProps, 'onChange'> {
  onChange: (event: SelectChangeEvent<unknown>) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ onChange, ...rest }) => {
  return <Select {...rest} onChange={onChange} />;
};

export type { SelectChangeEvent };

export default SelectComponent;
