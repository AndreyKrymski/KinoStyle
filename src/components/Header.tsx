import * as React from 'react';
import { useState, ChangeEvent } from 'react';
import {
  Button,
  CircularProgress,
  Grid,
  InputBase,
  Link,
  Paper,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { searchName, searchKeyWard } from '../redux/slices/searchSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { searchLoading } = useAppSelector((state) => state.search);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };
  let baseUrl = 'https://kinopoiskapiunofficial.tech';

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchKeyWard(searchText));
    dispatch(
      searchName(`${baseUrl}/api/v2.2/films?keyword=`, searchText) as any
    );
    setSearchText('');
    navigate('/search');
  };

  return (
    <Grid
      container
      sx={{
        width: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        flexDirection: { xs: 'row' },
      }}
      mb={{
        lg: 38,
        md: 23,
        sm: 19,
        xs: 10,
      }}
      p={2}
    >
      <Grid
        item
        md={3}
        sm={3.1}
        xs={6}
        order={{ xs: 0, sm: 0 }}
        sx={{
          fontFamily: 'Graduate,cursive',
          fontSize: {
            xs: '20px',
            md: '24px',
          },
          display: 'flex',
          justifyContent: { xs: 'flex-start', sm: 'center' },
          alignItems: 'center',
        }}
      >
        Кино
        <strong
          style={{
            padding: '0 5px',
            color: '#000',
            borderRadius: '5px',
            background: '#f90',
            marginLeft: '5px',
          }}
        >
          Стиль
        </strong>
      </Grid>
      <Grid
        item
        md={6}
        sm={4.4}
        xs={12}
        order={{ xs: 2, sm: 1 }}
        pt={{ xs: 1, sm: 0 }}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper
          component="form"
          onSubmit={handleClick}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: '34px',
            width: '100%',
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color: 'black', fontSize: '16px' }}
            placeholder="Найти фильм ?"
            onChange={handleChange}
            value={searchText}
          />
          {searchLoading && <CircularProgress size="20px" sx={{ p: '5px' }} />}
          <SearchIcon sx={{ p: '5px' }} />
          <Button
            type="submit"
            sx={{
              p: '5px',
              width: '20%',
              color: 'black',
              height: '34px',
              backgroundColor: '#f90',
              '&:hover': {
                backgroundColor: '#f1b65d',
              },
              transition: 'all 0.4s',
            }}
            aria-label="directions"
            disabled={searchLoading}
          >
            Найти
          </Button>
        </Paper>
      </Grid>
      <Grid
        md={3}
        sm={4.5}
        xs={6}
        order={{ xs: 1, sm: 2 }}
        item
        display="flex"
        alignItems="center"
        sx={{
          color: '#f90',
          fontSize: {
            xs: '18px',
            md: '20px',
          },
          fontFamily: 'Graduate,cursive',
          justifyContent: { xs: 'center', sm: 'center' },
        }}
      >
        <Grid item>
          <Link href="#" underline="none">
            <Typography
              variant="h6"
              sx={{
                padding: {
                  xs: '8px 8px 8px',
                  md: '8px',
                },
                marginRight: {
                  xs: '0px',
                  md: '8px',
                },
                color: '#f90',
                fontFamily: 'Graduate,cursive',
                transition: 'all 0.4s',
                fontSize: {
                  xs: '18px',
                  md: '20px',
                },
                '&:hover': {
                  color: '#f1b65d',
                },
              }}
            >
              Регистрация
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" underline="none">
            <Typography
              variant="h6"
              sx={{
                color: '#f90',
                fontFamily: 'Graduate,cursive',
                transition: 'all 0.4s',
                padding: {
                  xs: '8px 0px',
                  md: '8px',
                },
                fontSize: {
                  xs: '18px',
                  md: '20px',
                },
                '&:hover': {
                  color: '#f1b65d',
                },
              }}
            >
              Вход
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
