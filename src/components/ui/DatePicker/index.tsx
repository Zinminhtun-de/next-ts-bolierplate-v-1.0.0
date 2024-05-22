'use client';
import React from 'react';
import { Dayjs } from 'dayjs';
import { styled } from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { DesktopOnlyPickerProps } from '@mui/x-date-pickers/internals';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import theme from '@/components/theme';
import {
  usePickerLayout,
  PickersLayoutRoot,
  pickersLayoutClasses,
  PickersLayoutContentWrapper,
} from '@mui/x-date-pickers/PickersLayout';

interface DatePickerProps extends DesktopOnlyPickerProps {
  value: Dayjs | null;
  setValue: (arg?: any) => void;
}

const DatePickerStyled = styled(DesktopDatePicker)<{}>(({ theme }) => ({
  '& fieldset': {
    borderColor: theme.colors?.info?.[50],
    borderRadius: '8px',
  },
}));

// const CustomLayout = (props: any) => {
//   const { toolbar, tabs, content, actionBar } = usePickerLayout(props);

//   // Put the action bar before the content
//   return (
//     <PickersLayoutRoot className={pickersLayoutClasses.root} ownerState={props}>
//       {toolbar}
//       {actionBar}
//       <PickersLayoutContentWrapper className={pickersLayoutClasses.contentWrapper}>
//         {tabs}
//         {content}
//       </PickersLayoutContentWrapper>
//     </PickersLayoutRoot>
//   );
// }

const DatePicker: React.FC<DatePickerProps> = ({ value, setValue, ...rest }) => {
  return (
    <DatePickerStyled
      sx={{ zIndex: 10 }}
      label="Controlled picker"
      value={value}
      onChange={(newValue) => setValue(newValue)}
      slotProps={{
        textField: {
          variant: 'outlined',
          label: '',
        },
        layout: {
          sx: {
            '.MuiDayCalendar-weekContainer': {
              '& .MuiPickersDay-dayWithMargin': {
                color: theme.colors?.info?.[50],
                fontWeight: theme.typography.fontWeightMedium,
                '&.Mui-selected': {
                  backgroundColor: theme.colors?.info[50],
                  color: theme.colors?.white,
                },
              },
            },
          },
        },
      }}
      {...rest}
    />
  );
};

export default DatePicker;
