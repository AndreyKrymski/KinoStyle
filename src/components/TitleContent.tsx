import React, { FC } from 'react';
import { Grid, Typography } from '@mui/material';
interface TitleContentProps {
  title: string;
}

const TitleContent: FC<TitleContentProps> = ({ title }) => {
  return (
    <Grid
      container
      sx={{
        borderRadius: '5px',
        border: '1px solid rgba(102,102,102,.3)',
        background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
        margin: {
          xl: '20px 180px',
          lg: '20px 140px 5px',
          md: '15px 70px 5px',
          sm: '10px 40px 0px',
          xs: '10px 16px 0px',
        },
      }}
    >
      <Grid
        item
        sx={{
          padding: {
            xl: '10px 20px',
            lg: '10px 15px',
            md: '10px 10px',
            sm: '5px 5px',
            xs: '5px 5px',
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              xl: '20px',
              lg: '18px',
              md: '16px',
              sm: '14px',
              xs: '12px',
            },
          }}
        >
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TitleContent;
