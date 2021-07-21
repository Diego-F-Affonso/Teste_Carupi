import axios from 'axios';

const myKey = 'ca4fbb5678de43d6aa0dab52ee00b719';

export default axios.create({
  baseURL: 'https://api.rawg.io/api/',
  params: {
    key: myKey,
  },
});
