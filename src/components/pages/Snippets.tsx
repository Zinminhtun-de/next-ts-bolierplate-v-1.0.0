'use client';
import { useState } from 'react';
import { Box, Paper, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useAtom } from 'jotai';
import Layout from '@/components/layout';
import Button from '@/components/ui/Button';
import Dialog from '@/components/ui/Dialog';
import Text from '@/components/ui/Text';
import ShadowBox from '@/components/ui/Card/ShadowBox';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { openSnackBarAtom } from '@/components/ui/Alert/Snackbar';
import dayjs, { Dayjs } from 'dayjs';
import DatePicker from '../ui/DatePicker';

const Snippets = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [openSnackBar, setOpenSnackBar] = useAtom(openSnackBarAtom);
  return (
    <Layout title="Welcome">
      <div className="space-y-4">

        <DatePicker value={value} setValue={setValue} />

        <ShadowBox>ShadowBox</ShadowBox>

        <div>
          <Button variant="contained" gradient="PRIMARY" disabled>
            Primary Gradient Button
          </Button>
        </div>
        <div>
          <Button variant="contained" gradient="SECONDARY">
            Secondary Gradient Button
          </Button>
        </div>
        <div>
          <Button variant="outlined">Outlined Button</Button>
        </div>
        <div>
          <Button variant="outlined" className="bg-info-100 !text-white">
            Custom Background Color Button
          </Button>
        </div>
        <div>
          <Button variant="outlined" disabled>
            Disabled Button
          </Button>
        </div>
        <div>
          <Button variant="outlined" loading disabled>
            Saving Button
          </Button>
        </div>
        <div className="space-x-2">
          <Button variant="contained" size="small">
            Small
          </Button>
          <Button variant="contained" size="medium">
            Medium
          </Button>
          <Button variant="contained" size="large">
            Large
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            tabIndex={-1}
            // startIcon={
            //   <Image src="/uploads/icons/delete.svg" width={20} height={20} alt="delete" />
            // }
          >
            Button with start icon
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            // endIcon={<Image src="/uploads/icons/delete.svg" width={20} height={20} alt="delete" />}
          >
            Button with end icon
          </Button>
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() =>
              setOpenSnackBar({
                open: true,
                message: 'Show alert',
              })
            }
          >
            Show Toast Alert
          </Button>
        </div>
      </div>

      <Box className="py-4">
        <Button onClick={() => setOpen(!open)} variant="outlined">
          Button
        </Button>
      </Box>

      <Dialog open={open} setOpen={setOpen}>
        <Text>Hello World</Text>
      </Dialog>
    </Layout>
  );
};
export default Snippets;
