import React, { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';
import GamesContext from './gamesContext';

function Provider({ children }) {
  const [games, setGames] = useState();

  const fetchGames = async () => {
    await api
      .get('games')
      .then((response) => setGames(response.data.results))
      .catch((err) => console.error(`ops! ocorreu um erro${err}`));
  };

  const valueProvider = {
    games,
    fetchGames,
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
