import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import GamesContext from './gamesContext';

function Provider({ children }) {
  const [games, setGames] = useState();
  const [game, setGame] = useState();
  const [page, setPage] = useState(1);
  // const [disabledPrevius, setDisabledPrevius] = useState(true)

  const fetchGames = async () => {
    await api
      .get('games', { params: { page } })
      .then((response) => setGames(response.data.results))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(`ops! ocorreu um erro${err}`));
  };

  const fetchDetailsGames = async (id) => {
    await api
      .get(`games/${id}`)
      .then((response) => setGame(response.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error(`ops! ocorreu um erro${err}`));
  };

  const nextPage = () => {
    const add = page + 1;
    setPage(add);
  };

  const previousPage = () => {
    if (page === 1) {
      return null;
    }
    return setPage(page - 1);
  };

  const valueProvider = {
    games,
    fetchGames,
    nextPage,
    page,
    setPage,
    previousPage,
    fetchDetailsGames,
    game,
  };

  return (
    <GamesContext.Provider value={valueProvider}>
      {children}
    </GamesContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
