import axios from 'axios';
// import useContext from 'react';
// import GamesContext from '../context/gamesContext';

const myKey = 'ca4fbb5678de43d6aa0dab52ee00b719';

// function Services() {
//   const { page } = useContext(GamesContext);
//   return page;
// }

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: myKey,
    // Services,
  },
});

// https://api.rawg.io/api / games / {id}
