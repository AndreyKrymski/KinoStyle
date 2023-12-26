import React from 'react';
import { Grid, Link, Stack, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useLocation } from 'react-router-dom';

interface optionsProps {
  id: number;
  name: string;
  link: string;
}

const options: optionsProps[] = [
  {
    id: 1,
    name: 'НОВИНКИ',
    link: '/newItems',
  },
  {
    id: 2,
    name: 'КОМЕДИИ',
    link: '/comedies',
  },
  {
    id: 3,
    name: 'ФАНТАСТИКА',
    link: '/fantastic',
  },
  {
    id: 4,
    name: 'ИСТОРИЧЕСКИЕ',
    link: '/historicalFilms',
  },
  {
    id: 5,
    name: 'ПРИКЛЮЧЕНИЯ',
    link: '/adventures',
  },
  {
    id: 6,
    name: 'УЖАСЫ',
    link: '/horror',
  },
];
const fntSizeImg = {
  fontSize: {
    xl: '24px',
    lg: '24px',
    md: '24px',
    sm: '18px',
    xs: '18px',
  },
};
const active = {
  transition: 'all 0.4s',
  background: 'linear-gradient(to bottom,#5c70801d 0,#000 100%)',
  '& p': {
    color: '#f90',
    fontSize: {
      xl: '20px',
      lg: '18px',
      md: '16px',
      sm: '12px',
      xs: '12px',
    },
  },
};
const hover = {
  '&:hover p': {
    color: '#f90',
  },
};
const miniStyle = {
  padding: {
    xl: '10px 20px',
    lg: '10px 15px',
    md: '10px 10px',
    sm: '5px 5px',
    xs: '3px 3px',
  },
  width: '100%'
};
const gridStyle = {
  padding: {
    xl: '10px 20px',
    lg: '10px 15px',
    md: '10px 10px',
    sm: '5px 5px',
    xs: '5px 5px',
  },
  width: {
    sm: 'unset',
    xs: '100%',
  },
  textAlign: {
    sm: 'unset',
    xs: 'center',
  },
  fontFamily: 'Graduate,cursive',
  '& p': {
    fontSize: {
      xl: '20px',
      lg: '18px',
      md: '16px',
      sm: '12px',
      xs: '12px',
    },
  },

  '& a': {
    color: 'white',
    textDecoration: 'none',
  },
  transition: 'all 0.4s',
  '&:hover': {
    background: 'linear-gradient(to bottom,#5c70801d 0,#000 100%)',
  },
};

const Nav = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <Grid
      container
      sx={{
        marginBottom: '30px',
        borderRadius: '5px',
        border: '1px solid rgba(102,102,102,.3)',
        background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
        alignItems: 'center',
        flexDirection: {
          sm: 'row',
          xs: 'column',
        },
        margin: {
          xl: '0px 180px',
          lg: '0px 140px',
          md: '0px 70px',
          sm: '0px 40px',
          xs: '0px 16px',
        },
      }}
    >
      <Grid
        item
        sx={{
          ...gridStyle,
          ...hover,
          ...(pathname === '/' && active),
        }}
      >
        <Link href="/">
          <Typography>ГЛАВНАЯ</Typography>
        </Link>
      </Grid>

      <Grid
        item
        sx={{
          ...gridStyle,
          position: 'relative',
          '&:hover > div:first-of-type': {
            opacity: 1,
            transition: 'all 0.8s',
            pointerEvents: 'auto',
          },
        }}
      >
        <Typography>ФИЛЬМЫ</Typography>

        <Stack
          sx={{
            opacity: 0,
            position: 'absolute',
            alignItems: 'flex-start',
            top: {
              xl: '50px',
              lg: '48px',
              md: '46px',
              sm: '30px',
              xs: '-28px',
            },
            left: {
              sm: 0,
              xs: 'unset',
            },
            right: {
              sm: 'unset',
              xs: 0,
            },

            background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
            zIndex: 1,
            transition: 'all 0.8s',
            pointerEvents: 'none',
          }}
        >
          {options.map((option: optionsProps) => (
            <Grid
              key={option.id}
              sx={{
                border: '1px solid rgba(102,102,102,.3)',
                zIndex: 2,
                ...gridStyle,
                ...miniStyle,
                ...hover,
                ...(pathname === option.link && active),
              }}
            >
              <Link href={option.link}>
                <Typography>{option.name}</Typography>
              </Link>
            </Grid>
          ))}
        </Stack>
      </Grid>

      <Grid
        item
        sx={{ ...gridStyle, ...hover, ...(pathname === '/serials' && active) }}
      >
        <Link href="/serials">
          <Typography>СЕРИАЛЫ</Typography>
        </Link>
      </Grid>
      <Grid
        item
        sx={{
          ...gridStyle,
          ...hover,
          ...(pathname === '/miniSerials' && active),
        }}
      >
        <Link href="/miniSerials">
          <Typography>МИНИ СЕРИАЛЫ</Typography>
        </Link>
      </Grid>
      <Grid
        item
        sx={{
          ...gridStyle,
          ...hover,
          ...(pathname === '/cartoons' && active),
        }}
      >
        <Link href="/cartoons">
          <Typography>МУЛЬТФИЛЬМЫ</Typography>
        </Link>
      </Grid>

      <Grid
        item
        sx={{
          marginLeft: {
            sm: 'auto',
            xs: 'unset',
          },
          marginRight: {
            sm: 'unset',
            xs: 'auto',
          },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: {
            md: '10px',
            sm: '5px',
            xs: '10px',
          },
          padding: {
            xl: '10px 20px',
            lg: '10px 15px',
            md: '10px 10px',
            sm: '5px 5px',
            xs: '5px 5px',
          },
          '& svg': {
            color: '#f90',
            '&:hover': {
              color: '#f1b65d',
            },
          },
        }}
      >
        <Link href="#">
          <FacebookOutlinedIcon sx={{ ...fntSizeImg }} />
        </Link>
        <Link href="#">
          <TwitterIcon sx={{ ...fntSizeImg }} />
        </Link>
        <Link href="#">
          <LinkedInIcon sx={{ ...fntSizeImg }} />
        </Link>
        <Link href="#">
          <InstagramIcon sx={{ ...fntSizeImg }} />
        </Link>
      </Grid>
    </Grid>
  );
};

export default Nav;
