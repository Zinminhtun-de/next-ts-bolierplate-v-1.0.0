"use client";
import { cn } from "@/utils/cn";
import { Typography, TypographyProps, styled } from "@mui/material";
import React, { PropsWithChildren } from "react";

type Props = TypographyProps & PropsWithChildren;
interface TextProps extends Props {
  className?: string;
}

const TypographyStyled = styled(Typography)<{}>(({ theme }) => ({
  color: theme.colors?.black,
  fontWeight: theme.typography.fontWeightMedium,
}));

const Text: React.FC<TextProps> = ({ children, className, ...rest }) => {
  return (
    <TypographyStyled className={cn("text-base", className)} {...rest}>
      {children}
    </TypographyStyled>
  );
};

export default Text;
