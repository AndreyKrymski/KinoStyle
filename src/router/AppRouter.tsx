import React, { useEffect } from 'react';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../components/NotFound/NotFoundPage';
import { useAppSelector } from '../redux/store';
import Search from '../components/Search';
import GenresFilms from '../components/GenresFilms';
import options from '../constants';
import FilmsId from '../components/FilmsId';

const AppRouter = () => {
  const { searchError } = useAppSelector((state) => state.search);
  const { filmError } = useAppSelector((state) => state.film);
  const navigate = useNavigate();

  useEffect(() => {
    if (filmError || searchError) {
      navigate('/error/404');
    }
  }, [filmError, searchError, navigate]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Outlet />
          </App>
        }
      >
        <Route path="search" element={<Search />} />
        <Route path="search/:id" element={<FilmsId />} />

        {options.map((option) => (
          <Route key={option.id}>
            <Route
              path={option.path}
              index={option.index}
              element={<GenresFilms api={option.api} title={option.title} />}
            />

            <Route path={`${option.path}/:id`} element={<FilmsId />} />
          </Route>
        ))}
      </Route>

      <Route path="/*" element={<NotFoundPage err={searchError} />} />
    </Routes>
  );
};

export default AppRouter;
