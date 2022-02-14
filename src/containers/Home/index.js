import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Funciones API
import { getPokemons } from '../../api/getPokemons';

// Actions
import {setPokemons, setError} from '../../actions';

// Components
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';

// Styles
import './styles.css';
import axios from 'axios';

function Home() {
  // useDispatch() dispara acciones
  const dispatch=useDispatch();
  // useSelector() permite acceder al state
  const listPokemons=useSelector((state)=>(
    state.list
  ));

  useEffect(()=>{
    getPokemons()
    .then((res)=>{
      // Array con la url y nombre de cada pokemon
      const pokemonList=res.results;
      // console.log(pokemonList);
      /*
        Con promise.all() realizaremos una petición a cada pokemon mapeando el 
        arreglo que tiene todos los pokemones con la url y nombre.
      */
      return Promise.all(pokemonList.map(pokemon=>(
        axios.get(pokemon.url)
      )));     
    })
    .then((pokemonsResponse)=>{
      // console.log(pokemonsResponse);
      const pokemonsData=pokemonsResponse.map(response=>(
        response.data
      ));
      // console.log(pokemonsData);
      dispatch(setPokemons(pokemonsData));
    })
    .catch((err)=>{
      dispatch(setError({message: 'Ocurrió un error', err}))
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
