import React from 'react';

import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';

interface SelectProps {
  value?: string;
  label?: string;
  sx?: any;
  onChange?: (event: SelectChangeEvent) => void;
}

export const CustomSelect = ({ sx, label, onChange, value }: SelectProps) => {
  return (
    <>
      <FormControl sx={sx}>
        <InputLabel id='priority-label'>{label}</InputLabel>
        <Select
          id='priority-label'
          label={label}
          value={value}
          onChange={onChange}
        >
          <MenuItem value='High'>High</MenuItem>;
          <MenuItem value='Medium'>Medium</MenuItem>;
          <MenuItem value='Low'>Low</MenuItem>;
        </Select>
      </FormControl>
    </>
  );
};
