import React from 'react';

import { Chip } from '@mui/material';

interface ChipProps {
  label: string;
  variant: 'outlined' | 'filled';
}

export const CustomChip = ({ label, variant }: ChipProps) => {
  return (
    <>
      <Chip label={label} variant={variant} />
    </>
  );
};
