'use client';
import React, { PropsWithChildren } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { ButtonProps, styled } from '@mui/material';
import { cn } from '@/utils/cn';

type BtnProps = PropsWithChildren & ButtonProps;
interface CustomButtonProps extends BtnProps {
  className?: string;
  gradient?: 'PRIMARY' | 'SECONDARY' | 'FIRST' | 'SECOND' | 'THIRD';
  loading?: boolean;
}

const ButtonStyled = styled(LoadingButton)<ButtonProps & {}>(({ theme, variant }) => ({
  borderRadius: '8px',
  backgroundColor: variant === 'contained' ? theme.colors?.info[200] : theme.colors?.white,
  fontWeight: theme.typography.fontWeightMedium,
  borderColor: theme.colors?.info[200],
  '&:hover': {
    backgroundColor: theme.colors?.info[50],
    borderColor: theme.colors?.info[50],
    color: theme.colors?.white,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.colors?.info?.[200],
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.colors?.white,
  },
  textTransform: 'capitalize',
}));

const Button: React.FC<CustomButtonProps> = ({ children, className, gradient, ...rest }) => {
  return (
    <ButtonStyled
      className={cn(
        gradient === 'PRIMARY' ? !rest.disabled && 'gradient-btn' : '',
        gradient === 'SECONDARY' && 'gradient-secondary-btn',
        rest.variant === 'contained' && 'text-white',
        rest.variant === 'outlined' && 'text-info-100',
        className
      )}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
