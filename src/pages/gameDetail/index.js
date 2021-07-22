import React, { useEffect, useContext } from 'react';
import GamesContext from '../../context/gamesContext';
import Header from '../../components/Header';

function gameDetail({
  match: {
    params: { id },
  },
}) {
  const { fetchDetailsGames, game } = useContext(GamesContext);

  useEffect(() => {
    fetchDetailsGames(id);
    console.log(game);
  }, []);

  if (!game) return <h1>Carregando...</h1>;
  const {
    name,
    name_original: nameOriginal,
    description_raw: description,
    metacritic,
    released,
    website,
    rating,
    alternative_names: alternativeNames,
    platforms,
    stores,
    developers,
    genres,
    tags,
    publishers,
  } = game;
  return (
    <div>
      <Header />

      <div className="card">
        <img className="card-img-top" src={game.background_image} alt="back" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Description: {description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Name Original: {nameOriginal} </li>
          <li className="list-group-item">Metacritic: {metacritic}</li>
          <li className="list-group-item">Released: {released}</li>
          <li className="list-group-item">Website: {website} </li>
          <li className="list-group-item">rating: {rating} </li>
          <li className="list-group-item">
            Alternative Names:
            {alternativeNames.map((alternative) => (
              <p> {alternative}</p>
            ))}
          </li>
          <li className="list-group-item">
            Platforms:
            {platforms.map((platform) => (
              <p> {platform.platform.name}</p>
            ))}
          </li>
          <li className="list-group-item">
            Stores:
            {stores.map((store) => (
              <p> {store.store.name}</p>
            ))}
          </li>
          <li className="list-group-item">
            Developers:
            {developers.map((developer) => (
              <p> {developer.name}</p>
            ))}
          </li>
          <li className="list-group-item">
            Genres:
            {genres.map((genre) => (
              <p> {genre.name}</p>
            ))}
          </li>
          <li className="list-group-item">
            Tags:
            {tags.map((tag) => (
              <p> {tag.name}</p>
            ))}
          </li>
          <li className="list-group-item">
            Publishers:
            {publishers.map((publisher) => (
              <p> {publisher.name}</p>
            ))}
          </li>
        </ul>
        <div className="card-body">
          <a href="/" className="btn btn-primary">
            Back
          </a>
        </div>
      </div>
    </div>
  );
}

export default gameDetail;
