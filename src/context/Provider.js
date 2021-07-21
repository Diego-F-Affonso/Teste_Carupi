import React from 'react';
import PropTypes from 'prop-types';
import GamesContext from './gamesContext';

function Provider({ children }) {
  const test = 'DIEGO';

  const valueProvider = {
    test,
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
