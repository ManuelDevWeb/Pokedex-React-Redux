import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Funciones API
import { getPokemons } from '../../api/getPokemons';

// Reducers
import {setPokemons} from '../../actions';

// Components
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';

// Styles
import './styles.css';

function Home() {
  // useDispatch() disparar acciones
  const dispatch=useDispatch();
  // useSelector() permite acceder al state
  const listPokemons=useSelector((state)=>(
    state.list
  ))

  useEffect(()=>{
    getPokemons()
    .then((res)=>{
      dispatch(setPokemons(res.results))
    })
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
