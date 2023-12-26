import * as React from 'react';
import { Grid, Link, List, ListItem, Typography } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const Footer = () => {
  return (
    <>
      <Grid
        container
        component="footer"
        justifyContent="center"
        alignItems="flex-start"
        mt={2}
        sx={{
          padding: {
            xl: '30px 180px',
            lg: '25px 140px',
            md: '20px 70px',
            sm: '15px 40px',
            xs: '10px 16px',
          },
        }}
        style={{
          width: '100%',
          border: '1px solid rgba(102,102,102,.3)',
          background: '#151515',

          boxShadow:
            'inset 0 -2px 10px rgba(0,0,0,.5), 0 -2px 10px rgba(0,0,0,.5)',
        }}
      >
        <Grid item xl={3} lg={3} md={6} sm={6} xs={12}>
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                md: '22px',
                sm: '18px',
                xs: '16px',
              },
            }}
          >
            О проекте
          </Typography>
          <List sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },

                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Информация о сайте
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },
                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Правила портала
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },
                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Новости сайта
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },
                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Обратная связь
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xl={3}
          lg={3}
          md={6}
          sm={6}
          xs={12}
          sx={{
            marginTop: {
              sm: '0px',
              xs: '10px',
            },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: {
                md: '22px',
                sm: '18px',
                xs: '16px',
              },
            }}
          >
            Полезное
          </Typography>
          <List sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },
                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Как добавить фильм
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },
                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Как смотреть онлайн
                </Typography>
              </Link>
            </ListItem>
            <ListItem disablePadding>
              <CircleIcon sx={{ fontSize: '8px', marginRight: '10px' }} />
              <Link href="#" underline="none">
                <Typography
                  sx={{
                    color: '#f90',
                    fontFamily: 'Graduate,cursive',
                    transition: 'all 0.4s',
                    fontSize: {
                      md: '16px',
                      sm: '14px',
                    },
                    '&:hover': {
                      color: '#f1b65d',
                    },
                  }}
                >
                  Еще какаято ссылка
                </Typography>
              </Link>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={12}
          sm={12}
          xs={12}
          sx={{
            marginTop: {
              lg: '0px',
              sm: '10px',
              xs: '10px',
            },
          }}
        >
          <Typography
            variant="h5"
            mb={1}
            sx={{
              fontSize: {
                md: '22px',
                sm: '18px',
                xs: '16px',
              },
            }}
          >
            Самый лучший сайт
          </Typography>
          <Typography
            sx={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}
            mb={1}
          >
            Добро пожаловать на
            <strong
              style={{
                fontFamily: 'Graduate,cursive',
                color: 'white',
                marginLeft: '8px',
              }}
            >
              Кино
            </strong>
            <strong
              style={{
                padding: '0 4px',
                color: '#000',
                borderRadius: '5px',
                background: '#f90',
                marginLeft: '5px',
              }}
            >
              Стиль
            </strong>{' '}
            — веб-платформу, которая не просто предоставляет информацию, а
            создает уникальный опыт для каждого пользователя. Вот почему наш
            сайт является лучшим в своем классе.
          </Typography>
          <Typography
            sx={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.5)' }}
          >
            Наш сайт предлагает качественный и уникальный контент, который
            вдохновляет, обучает и развлекает. Мы постоянно обновляем наши
            материалы, чтобы соответствовать вашим интересам и ожиданиям. Мы
            следим за последними тенденциями и используем инновационные
            технологии, чтобы предоставить вам лучший опыт.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          width: '100%',
          padding: {
            xl: '10px 180px',
            lg: '10px 140px',
            md: '10px 70px',
            sm: '10px 40px',
            xs: '10px 16px',
          },
          fontSize: {
            xl: '20px',
            lg: '18px',
            md: '16px',
            sm: '14px',
            xs: '12px',
          },
          color: 'rgba(255, 255, 255, 0.5)',
        }}
      >
        <Grid item xs={6}>
          <Typography
            sx={{
              fontSize: {
                xl: '18px',
                lg: '16px',
                md: '14px',
                sm: '12px',
                xs: '10px',
              },
            }}
          >
            Copyright MyCorp © 2023
          </Typography>
        </Grid>
        <Grid item xs={6} textAlign="end">
          <Typography
            sx={{
              fontSize: {
                xl: '18px',
                lg: '16px',
                md: '14px',
                sm: '12px',
                xs: '10px',
              },
            }}
          >
            Бесплатный хостинг uCoz
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
