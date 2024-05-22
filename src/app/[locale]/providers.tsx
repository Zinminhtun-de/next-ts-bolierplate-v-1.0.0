'use client';
import theme from '@/components/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SWRConfig } from 'swr';
import fetcher from '@/lib/fetcher';
import Snackbar from '@/components/ui/Alert/Snackbar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <SWRConfig value={{ fetcher }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>

        <ProgressBar height="4px" color="#EBBD37" options={{ showSpinner: false }} shallowRouting />
        <Snackbar />
      </SWRConfig>
    </ThemeProvider>
  );
}
