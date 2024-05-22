'use client';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material';

interface Props {
  window?: () => Window;
  children: React.ReactNode;
  backRoute?: string;
  title: string;
  isReload?: boolean;
  isfooter?: string;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children as React.ReactElement, {
    elevation: trigger ? 4 : 0,
  });
}

const AppBarStyled = styled(AppBar)<{}>(({ theme }) => ({
  background: `linear-gradient(90deg, ${theme.colors?.info?.[50]} 0%, ${theme.colors?.info?.[100]} 50%, ${theme.colors?.info?.[100]} 100%)`,
  maxWidth: '430px',
  top: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
}));

const ContainerStyled = styled(Container)<{ isfooter?: string }>(({ theme, isfooter }) => ({
  paddingTop: '72px',
  height: '100vh',
  maxWidth: '430px !important',
  // maxHeight: "850px",
  position: 'relative',
  background: theme.colors?.grey?.[50],
  overflow: 'auto',
  paddingBottom: isfooter === 'true' ? '100px' : '0',
}));

export default function Layout(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ContainerStyled isfooter={props.isfooter} className="no-scrollbar">
        <ElevationScroll {...props}>
          <AppBarStyled>
            <Toolbar>
              <div>Header</div>
            </Toolbar>
          </AppBarStyled>
        </ElevationScroll>
        {props.children}
      </ContainerStyled>
    </React.Fragment>
  );
}
