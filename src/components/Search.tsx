import * as React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { filmsProps } from '../redux/filmsProps';
import { useAppSelector } from '../redux/store';
import TitleContent from './TitleContent';

const Search: React.FC = () => {
  const searchState = useAppSelector((state) => state.search);
  const { searchData, keyward } = useAppSelector((state) => state.search);
  console.log(searchState);
  console.log(keyward);
  const title =
    searchData.total === 0
      ? 'По вашему запросу ничего не найдено'
      : `Поиск по имени ${keyward}`;
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

export default Search;
