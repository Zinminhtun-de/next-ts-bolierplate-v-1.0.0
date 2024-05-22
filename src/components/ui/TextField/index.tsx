'use client';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

const OutlinedTextField = () => {
  return (
    <>
      <OutlinedInput
        id="outlined-adornment-weight"
        endAdornment={<InputAdornment position="end">MMK</InputAdornment>}
        aria-describedby="outlined-weight-helper-text"
        inputProps={{
          'aria-label': 'weight',
        }}
        size="small"
        className="rounded-lg w-full"
        label=""
      />
    </>
  );
};
export default OutlinedTextField;
