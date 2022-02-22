import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Funciones API
import { getPokemons } from '../../api/getPokemons';

// Actions
import {fetchPokemonsWithDetails, setError} from '../../actions';

// Components
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import Loader from '../../components/Loader';

// Styles
import './styles.css';

function Home() {
  // useDispatch() dispara acciones
  const dispatch=useDispatch();
  // useSelector() permite acceder al state
  const listPokemons=useSelector((state)=>(
    state.list
  ));
  const loading=useSelector((state)=>(
    state.loading
  ));

  useEffect(()=>{
      // Obteniendo listado de pokemons
      getPokemons()
        .then((res) => {
          // Disparando la acción (REDUX THUNK)
          // Enviamos array con la url y nombre de cada pokemon
          dispatch(fetchPokemonsWithDetails(res.results));
        })
        .catch((error) => {
          dispatch(setError({ message: "Oops! Something went wrong.", error }));
        });
  },[dispatch])

  return (
    <div className='Home'>
      <Searcher />
      { loading && <Loader /> }   
      <PokemonList 
        listPokemons={listPokemons}
      />
    </div>
  );
}

export default Home;
