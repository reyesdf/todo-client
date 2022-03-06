import React, { useState } from 'react';

import {
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material';

interface SelectProps {
  value?: string;
  label?: string;
  sx?: any;
  onChange?: () => void;
}

export const CustomSelect = ({ sx, value, label, onChange }: SelectProps) => {
  const [priority, setPriority] = useState('');

  const priorityChangeHandler = (event: SelectChangeEvent) => {
    setPriority(event.target.value as string);
    console.log(priority);
  };

  return (
    <>
      <FormControl sx={sx}>
        <InputLabel id='priority-label'>{label}</InputLabel>
        <Select
          id='priority-label'
          label={label}
          value={priority}
          onChange={priorityChangeHandler}
        >
          <MenuItem value='High'>High</MenuItem>;
          <MenuItem value='Medium'>Medium</MenuItem>;
          <MenuItem value='Low'>Low</MenuItem>;
        </Select>
      </FormControl>
    </>
  );
};
