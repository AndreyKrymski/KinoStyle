import * as React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { filmsProps } from '../redux/filmsProps';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface MovieCardProps {
  item: filmsProps;
}

const MovieCard: FC<MovieCardProps> = ({ item }) => {
  const navigate = useNavigate();

  const handleClickCard = (item: filmsProps) => {
    navigate(`${item.kinopoiskId}`);
  };
  return (
    <Card
      sx={{
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid rgba(102,102,102,.3)',
        background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
        height: {
          xl: '450px',
          lg: '582px',
          md: '542px',
          sm: '637px',
          xs: 'unset',
        },
        maxHeight: {
          sm: 'unset',
          xs: '872px',
        },
        '&:hover img': {
          transform: 'scale(1.04)',
          transition: 'transform 0.3s ease',
        },
      }}
      onClick={() => handleClickCard(item)}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.nameOriginal}
          src={item.posterUrl}
          sx={{
            borderRadius: '5px',
            height: {
              xl: '368px',
              lg: '500px',
              md: '460px',
              sm: '555px',
              xs: 'unset',
            },
            maxHeight: {
              sm: 'unset',
              xs: '790px',
            },
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            color: '#f90',
            padding: '8px 5px',
          }}
        >
          <Typography
            variant="body1"
            textAlign="center"
            sx={{ padding: '-5px' }}
          >
            {item.nameRu === null ? item.nameOriginal : item.nameRu}
          </Typography>
          <Stack
            flexDirection="row"
            gap={1}
            justifyContent="center"
            alignItems="center"
          >
            <Rating
              name="read-only"
              value={item.ratingKinopoisk}
              max={1}
              readOnly
              precision={0.1}
              sx={{ display: 'flex', justifyContent: 'center' }}
            />
            <Typography sx={{ color: 'white' }}>
              {item.ratingKinopoisk}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
