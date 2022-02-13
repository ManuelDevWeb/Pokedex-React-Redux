import React from 'react';

// Components
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';

// Styles
import './styles.css';

function Home() {
  return (
    <div className='Home'>
      <Searcher />
      <PokemonList />
    </div>
  );
}

export default Home;
