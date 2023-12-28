import React, { useState } from 'react';
import { Button, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { searchName } from '../redux/slices/searchSlice';

const Pages = () => {
  const { searchData, api } = useAppSelector((state) => state.search);
  const [activeNumber, setActiveNumber] = useState<number>(1);
  const [currentPageBlock, setCurrentPageBlock] = useState<number>(1);
  const pageSize = 5;

  const dispatch = useAppDispatch();

  const scrollToTop = () => {
    window.scrollTo({ top: 320, behavior: 'smooth' });
  };

  const pageNumbers: number[] =
    searchData.totalPages !== null
      ? Array.from({ length: searchData.totalPages }, (_, index) => index + 1)
      : [];

  const updatePageInUrl = (url: string | null, newPage: number): string => {
    if (url) {
      const urlObj = new URL(url);
      const searchParams = new URLSearchParams(urlObj.search);
      searchParams.set('page', newPage.toString());
      urlObj.search = searchParams.toString();
      return urlObj.toString();
    }
    return '';
  };

  const handleClick = (item: number) => {
    const newUrlPage = updatePageInUrl(api, item);
    setActiveNumber(item);
    dispatch(searchName(newUrlPage) as any);
    scrollToTop();
  };

  const handlePrevBlock = () => {
    if (currentPageBlock > 1) {
      setCurrentPageBlock(currentPageBlock - 1);
    }
  };

  const handleNextBlock = () => {
    const totalPages = Math.ceil(pageNumbers.length / pageSize);
    if (currentPageBlock < totalPages) {
      setCurrentPageBlock(currentPageBlock + 1);
    }
  };

  return (
    <Grid
      container
      sx={{
        borderRadius: '5px',
        border: '1px solid rgba(102,102,102,.3)',
        background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
        justifyContent: 'center',
        margin: {
          xl: '5px 180px',
          lg: '5px 140px',
          md: '5px 70px',
          sm: '5px 40px',
          xs: '5px 16px',
        },
        gap: {
          xs: '4px',
          sm: '12px',
        },
        display:
          searchData.totalPages === null || searchData.totalPages === 0
            ? 'none'
            : 'flex',
      }}
    >
      <Grid
        item
        sx={{
          padding: {
            md: '10px 0px',
            sm: '5px 0px',
            xs: '5px 0px',
          },
        }}
      >
        <Button
          variant="text"
          onClick={() => handlePrevBlock()}
          style={{
            border: '1px solid rgba(102,102,102,.3)',
            background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
            color: '#f90',
            padding: 0,
            margin: 0,
            minWidth: '35px',
            height: '35px',
            display: currentPageBlock > 1 ? 'inline-block' : 'none',
          }}
        >
          &lt;
        </Button>
      </Grid>
      {pageNumbers
        .slice((currentPageBlock - 1) * pageSize, currentPageBlock * pageSize)
        .map((item) => (
          <Grid
            item
            key={item}
            sx={{
              padding: {
                md: '10px 0px',
                sm: '5px 0px',
                xs: '5px 0px',
              },
            }}
          >
            <Button
              variant="text"
              onClick={() => handleClick(item)}
              style={{
                border: '1px solid rgba(102,102,102,.3)',
                background:
                  activeNumber === item
                    ? '#f90'
                    : 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
                color: activeNumber === item ? 'white' : '#f90',
                padding: 0,
                margin: 0,
                minWidth: '35px',
                height: '35px',
              }}
            >
              {item}
            </Button>
          </Grid>
        ))}
      <Grid
        item
        sx={{
          padding: {
            md: '10px 0px',
            sm: '5px 0px',
            xs: '5px 0px',
          },
        }}
      >
        <Button
          variant="text"
          onClick={() => handleNextBlock()}
          style={{
            border: '1px solid rgba(102,102,102,.3)',
            background: 'linear-gradient(to bottom,#5c7081 0,#000 100%)',
            color: '#f90',
            padding: 0,
            margin: 0,
            minWidth: '35px',
            height: '35px',
            display:
              currentPageBlock < Math.ceil(pageNumbers.length / pageSize)
                ? 'inline-block'
                : 'none',
          }}
        >
          &gt;
        </Button>
      </Grid>
    </Grid>
  );
};

export default Pages;
