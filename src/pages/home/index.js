import React from 'react';
import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Pagination from '../../components/Pagination';

function Home() {
  return (
    <div>
      <Header />
      <Pagination />
      <Cards />
      <Pagination />
    </div>
  );
}

export default Home;
