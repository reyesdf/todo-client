import * as React from 'react';

import TextField from '@mui/material/TextField';

interface InputProps {
  id: string;
  variant: 'filled' | 'outlined' | 'standard';
  label: string;
  sx?: any;
  value?: any;
  onChange?: (event: any) => void;
}

export const CustomInput = ({
  sx,
  id,
  label,
  variant,
  value,
  onChange,
}: InputProps) => {
  return (
    <>
      <TextField
        sx={sx}
        label={label}
        variant={variant}
        id={id}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
