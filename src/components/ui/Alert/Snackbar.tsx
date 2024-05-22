"use client";
import * as React from "react";
import MuiSnackbar from "@mui/material/Snackbar";
import Slide, { SlideProps } from "@mui/material/Slide";
import { atom, useAtom } from "jotai";
import theme from "@/components/theme";

interface OpenSnackBarAtomType {
  open: boolean;
  message?: React.ReactNode | string;
  action?: React.ReactNode;
  handleClose?: () => void;
}

export const openSnackBarAtom = atom<OpenSnackBarAtomType>({
  open: false,
});

export function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="down" />;
}

const Snackbar = () => {
  const [openSnackBar, setOpenSnackBar] = useAtom(openSnackBarAtom);

  return (
    <div>
      <MuiSnackbar
        // key={state.Transition.name}
        TransitionComponent={SlideTransition}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnackBar.open}
        message={openSnackBar.message}
        onClose={() =>
          setOpenSnackBar({
            open: false,
          })
        }
        action={openSnackBar.action}
        sx={{
          "> div.MuiSnackbarContent-root": {
            backgroundColor: theme.colors?.red?.[500],
          },
        }}
      />
    </div>
  );
};

export default Snackbar;
