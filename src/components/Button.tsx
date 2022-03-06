import React from 'react';

import { Button } from '@mui/material';

interface ButtonProps {
  variant: 'text' | 'contained' | 'outlined';
  onClick: () => void;
  label?: string;
}

export const CustomButton = ({ variant, onClick, label }: ButtonProps) => {
  return (
    <>
      <Button variant={variant} onClick={onClick}>
        {label}
      </Button>
    </>
  );
};
