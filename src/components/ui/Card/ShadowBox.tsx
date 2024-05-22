import { cn } from "@/utils/cn";
import { Box, Paper as MPaper, PaperProps, alpha, styled } from "@mui/material";
import React, { PropsWithChildren } from "react";

const Paper = styled(MPaper)(({ theme }) => ({
  boxShadow: `0px 4px 6px -1px ${alpha(
    theme?.colors?.slate?.[800] || "",
    0.1
  )}`,
  borderRadius: "8px",
}));

const ShadowBox: React.FC<
  PropsWithChildren &
    PaperProps & {
      className?: string;
    }
> = ({ children, className, ...rest }) => {
  return (
    <Paper className={cn("p-4", className)} {...rest}>
      {children}
    </Paper>
  );
};

export default ShadowBox;
