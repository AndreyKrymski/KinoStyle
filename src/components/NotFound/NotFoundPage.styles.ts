import Stack from '@mui/material/Stack';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { styled as styles } from '@mui/system';

export const ErrorLayoutStack = styled(Stack)(() => ({
  alignItems: 'center',
  justifyContent: 'space-between',
  overflow: 'hidden',
  padding: '15px 0',
}));
export const ContentStack = styled(Stack)(() => ({
  alignItems: 'center',
  flexGrow: '1',
  marginTop: '15px',
}));

export const HeadTypography = styled(Typography)(({ theme }) => ({
  fontSize: '30px',
  fontWeight: '"Roboto","Helvetica","Arial",sans-serif',
  color: '#9e9e9e',
}));
export const SubHeadTypography = styled(Typography)(() => ({
  fontSize: '16px',
  color: '#9e9e9e',
}));
export const ImgContainer = styled(Box)(() => ({
  width: '100%',
  minHeight: '490px',
  height: '100%',
  position: 'relative',
}));
export const Img = styles('img')(() => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  top: '0',
  left: '0',
}));
