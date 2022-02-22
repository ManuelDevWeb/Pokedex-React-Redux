import axios from "axios";

// Funciones API
import { getPokemons } from "../api/getPokemons";

// Actions type
import { SET_POKEMONS, CLEAR_ERROR, SET_ERROR } from "./type";

// Función para asignar la lista de pokemones
export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});

// Función para asignar el error
export const setError = (payload) => ({
    type: SET_ERROR,
    payload
});

// Función para borrar el error
export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload
});

// Función para obtener los pokemons. Esta función recibe los parámetros que
// necesitamos (En este caso no recibe nada) y adentro podemos hacer uso del 
// dispatch, se pasa la logica dentro del dispatch. Esto con el fin de limpiar
// nuestro código y solo llamar la acción en el componente que necesitemos
// la información de los Pokemons.
// REDUX THUNK
export const getPokemonsWidthDetails = () => (dispatch) => {
    getPokemons()
        .then((res) => {
            // Array con la url y nombre de cada pokemon
            const pokemonList = res.results;
            // console.log(pokemonList);
            /*
              Con promise.all() realizaremos una petición a cada pokemon mapeando el 
              arreglo que tiene todos los pokemones con la url y nombre.
            */
            return Promise.all(pokemonList.map(pokemon => (
                axios.get(pokemon.url)
            )));
        })
        .then((pokemonsResponse) => {
            // console.log(pokemonsResponse);
            const pokemonsData = pokemonsResponse.map(response => (
                response.data
            ));
            // console.log(pokemonsData);
            dispatch(setPokemons(pokemonsData));
        })
        .catch((err) => {
            dispatch(setError({ message: 'Ocurrió un error', err }))
        })
}