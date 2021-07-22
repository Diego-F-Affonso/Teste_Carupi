import React, { useContext, useEffect } from 'react';
import GamesContext from '../../context/gamesContext';
// import { Navbar } from 'react-bootstrap';
import './index.css';

function Cards() {
  const { games, fetchGames, page } = useContext(GamesContext);

  useEffect(() => {
    fetchGames();
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="card">
      <div className="card-header">Games</div>
      <ul className="list-group list-group-flush">
        {games &&
          games.map(({ name, released, rating, id }) => (
            <li className="list-group-item" key={id}>
              <div className="card w-75">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">
                    Rating: {rating}
                    <br /> Released: {released}
                  </p>
                  <a href={`game${id}`} className="btn btn-primary">
                    Details
                  </a>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Cards;
