'use client';
import * as React from 'react';
import { DialogActions, DialogContent, DialogProps, Dialog as MDialog } from '@mui/material';
import Image from 'next/image';
import Text from '../Text';
import theme from '@/components/theme';
import { useRouter } from 'next/navigation';
import Button from '../Button';

type MDialogProps = DialogProps & React.PropsWithChildren;
interface CustomDialogProps extends MDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogTitle?: string;
  dialogContentText?: any;
  actionCancelText?: string;
  actionSaveText?: string;
  closeIcon?: boolean;
  actionOnClick?: (arg?: any) => void;
  navigateTo?: string;
  iconSize?: number;
  outsideClose?: boolean;
  terms?: boolean;
}

const Dialog: React.FC<CustomDialogProps> = ({
  open,
  setOpen,
  closeIcon = true,
  iconSize,
  ...rest
}) => {
  const router = useRouter();
  const handleNavigate = () => {
    router.push(`${rest.navigateTo}`);
  };
  return (
    <React.Fragment>
      <MDialog
        maxWidth="xs"
        open={open}
        onClose={() => {
          rest.outsideClose && setOpen(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        {...rest}
      >
        {closeIcon && (
          <div className={`absolute cursor-pointer top-5 right-5`} onClick={() => setOpen(false)}>
            <Image
              src="/uploads/icons/modal_cross.svg"
              width={`${iconSize ? iconSize : 11}`}
              height={`${iconSize ? iconSize : 11}`}
              alt="modal_cross"
              className="text-right"
            />
          </div>
        )}
        {rest.children ? (
          rest.children
        ) : (
          <>
            <DialogContent>
              <Text
                sx={{ color: theme?.colors?.primary }}
                className={` text-center pb-4 font-extrabold sm:text-lg`}
              >
                {rest.dialogTitle}
              </Text>
              <Text className={`${rest.terms ? 'text-start' : 'text-center'}`}>
                {rest.dialogContentText}
              </Text>
            </DialogContent>

            <DialogActions>
              {rest?.actionCancelText && (
                <Button variant="outlined" className="w-full" onClick={() => setOpen(false)}>
                  {rest.actionCancelText}
                </Button>
              )}
              <Button
                autoFocus
                onClick={
                  rest.navigateTo ? rest.actionOnClick && handleNavigate : rest.actionOnClick
                }
                variant="contained"
                gradient="PRIMARY"
                className="w-full m-2 uppercase"
              >
                {rest.actionSaveText}
              </Button>
            </DialogActions>
          </>
        )}
      </MDialog>
    </React.Fragment>
  );
};

export default Dialog;
