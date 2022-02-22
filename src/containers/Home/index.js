import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Actions
import {getPokemonsWidthDetails} from '../../actions';

// Components
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';

// Styles
import './styles.css';

function Home() {
  // useDispatch() dispara acciones
  const dispatch=useDispatch();
  // useSelector() permite acceder al state
  const listPokemons=useSelector((state)=>(
    state.list
  ));

  useEffect(()=>{
    // Disparando la acción (REDUX THUNK)
    dispatch(getPokemonsWidthDetails());
  },[dispatch])

  return (
    <div className='Home'>
      <Searcher />
      <PokemonList 
        listPokemons={listPokemons}
      />
    </div>
  );
}

export default Home;
