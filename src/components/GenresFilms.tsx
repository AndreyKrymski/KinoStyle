import React, { FC } from 'react';
import { Box, Grid, LinearProgress } from '@mui/material';
import MovieCard from './MovieCard';
import { filmsProps } from '../redux/filmsProps';
import { useAppDispatch, useAppSelector } from '../redux/store';
import TitleContent from './TitleContent';
import { useEffect } from 'react';
import { searchName } from '../redux/slices/searchSlice';

interface GenresFilmsProps {
  title: string;
  api: string;
}

const GenresFilms: FC<GenresFilmsProps> = ({ title, api }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(searchName(api) as any);
  }, [dispatch, api]);
  const { searchData, searchLoading } = useAppSelector((state) => state.search);
  return (
    <>
      <TitleContent title={title} />
      <Grid
        container
        sx={{
          margin: {
            xl: '0px 164px',
            lg: '0px 124px',
            md: '0px 54px',
            sm: '0px 26px',
            xs: '0px 2px',
          },
        }}
      >
        {searchLoading && (
          <Box sx={{ width: '100%' }} m="0 20px">
            <LinearProgress />
          </Box>
        )}
        {searchData.items.map((item: filmsProps) => (
          <Grid
            item
            key={item.kinopoiskId}
            xl={3}
            lg={4}
            md={4}
            sm={6}
            xs={12}
            p={2}
          >
            <MovieCard item={item}></MovieCard>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GenresFilms;
