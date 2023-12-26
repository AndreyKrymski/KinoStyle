import React, { FC } from 'react';
import {
  Box,
  CircularProgress,
  Divider,
  Grid,
  ImageList,
  ImageListItem,
  LinearProgress,
  Rating,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { useEffect } from 'react';
import { searchReset } from '../redux/slices/searchSlice';
import { filmName, filmReset, setFilmImage } from '../redux/slices/FilmSlice';
import { useParams } from 'react-router-dom';

interface FilmsIdProps {
  title?: string;
  api?: string;
}

const FilmsId: FC<FilmsIdProps> = () => {
  const { id } = useParams();
  console.log(id)
    const searchState = useAppSelector((state) => state.search);
    const {  keyward } = useAppSelector((state) => state.search);
    console.log(searchState);
    console.log(keyward);

  const dispatch = useAppDispatch();
  const formatFilmLength = (lengthInMinutes: number) => {
    const hours = Math.floor(lengthInMinutes / 60);
    const minutes = lengthInMinutes % 60;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}:00`;
  };

  useEffect(() => {
    dispatch(searchReset());
    dispatch(
      filmName(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`
      ) as any
    );
    dispatch(
      setFilmImage(
        `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/images`
      ) as any
    );

    return () => {
      dispatch(filmReset());
    };
  }, [dispatch, id]);

  const { filmData, filmLoading, filmImages } = useAppSelector(
    (state) => state.film
  );

  const slicedImage = filmImages.items.slice(0, 10);

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

        minHeight: '500px',
      }}
    >
      <Grid item xl={12}>
        {filmLoading && (
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        )}
      </Grid>

      <Grid
        item
        lg={6}
        xs={12}
        sx={{
          padding: {
            md: '24px',
            sm: '14px',
            xs: '8px',
          },
        }}
      >
        {filmLoading ? (
          <CircularProgress size="50%" sx={{ display: 'inline' }} />
        ) : (
          <img
            src={filmData?.posterUrl}
            alt="notFound"
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </Grid>
      <Grid
        item
        lg={6}
        xs={12}
        sx={{
          padding: {
            md: '24px',
            sm: '14px',
            xs: '8px',
          },
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          mb={2}
          sx={{
            fontSize: {
              md: '24px',
              sm: '22px',
              xs: '16px',
            },
          }}
        >
          {' '}
          {filmData?.nameRu === null
            ? filmData?.nameOriginal
            : filmData?.nameRu}
        </Typography>
        {filmData?.year && (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: { sm: '10px 0', xs: '5px 0' },
                fontSize: {
                  md: '18px',
                  sm: '16px',
                  xs: '14px',
                },
              }}
            >
              Год выпуска: {filmData?.year} г
            </Typography>
            <Divider sx={{ borderColor: 'white' }} />
          </>
        )}
        {filmData?.countries && (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: { sm: '10px 0', xs: '5px 0' },
                fontSize: {
                  md: '18px',
                  sm: '16px',
                  xs: '14px',
                },
              }}
            >
              {`Страна: ${filmData?.countries
                .map((item) => item.country)
                .join(', ')}`}
            </Typography>
            <Divider sx={{ borderColor: 'white' }} />
          </>
        )}
        {filmData?.filmLength && (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: { sm: '10px 0', xs: '5px 0' },
                fontSize: {
                  md: '18px',
                  sm: '16px',
                  xs: '14px',
                },
              }}
            >
              Продолжительность: {formatFilmLength(filmData.filmLength)}
            </Typography>
            <Divider sx={{ borderColor: 'white' }} />
          </>
        )}
        {filmData?.genres && (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: { sm: '10px 0', xs: '5px 0' },
                fontSize: {
                  md: '18px',
                  sm: '16px',
                  xs: '14px',
                },
              }}
            >
              {`Жанры: ${filmData?.genres
                .map((item) => item.genre)
                .join(', ')}`}
            </Typography>
            <Divider sx={{ borderColor: 'white' }} />
          </>
        )}
        {filmData?.ratingKinopoisk && (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: { sm: '10px 0', xs: '5px 0' },
                display: 'flex',
                gap: '10px',
                alignItems: 'center',

                fontSize: {
                  md: '18px',
                  sm: '16px',
                  xs: '14px',
                },
              }}
            >
              {`Рейтинг: `}
              <Rating
                name="read-only"
                value={filmData?.ratingKinopoisk}
                max={10}
                readOnly
                precision={0.5}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '20px',
                  background: 'inherit',
                  '& .MuiRating-icon': {
                    color: '#faaf00',
                  },
                }}
              />
              {filmData?.ratingKinopoisk}
            </Typography>
            <Divider sx={{ borderColor: 'white' }} />
          </>
        )}

        {filmData?.description && (
          <>
            <Typography
              variant="body1"
              sx={{
                padding: { sm: '10px 0 15px', xs: '5px 0 10px' },
                fontSize: {
                  md: '16px',
                  sm: '14px',
                  xs: '12px',
                },
              }}
            >
              {filmData?.description}
            </Typography>
          </>
        )}
        {slicedImage && (
          <ImageList
            style={{ gridTemplateColumns: 'revert-layer', gap: 'revert-layer' }}
            sx={{
              width: '100%',
              overflowX: 'hidden',
              margin: 0,

              gridTemplateColumns: {
                xl: 'repeat(4, 1fr)',
                lg: 'repeat(5, 1fr)',
                md: 'repeat(4, 1fr)',
                sm: 'repeat(3, 1fr)',
                xs: 'repeat(2, 1fr)',
              },
              gap: {
                sm: '15px',
                xs: '10px',
              },
            }}
          >
            {slicedImage.map((item) => (
              <ImageListItem key={item.previewUrl}>
                <img
                  srcSet={item.previewUrl}
                  src={item.previewUrl}
                  alt={''}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        )}
      </Grid>
    </Grid>
  );
};

export default FilmsId;
