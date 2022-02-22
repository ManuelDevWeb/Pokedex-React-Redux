import axios from "axios";

// Actions type
import { SET_POKEMONS, CLEAR_ERROR, SET_ERROR, TOGGLE_LOADER, SET_FAVORITE } from "./type";

// Función para asignar la lista de pokemones
export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload,
});

// Función para asignar el error
export const setError = (payload) => ({
    type: SET_ERROR,
    payload,
});

// Función para borrar el error
export const clearError = (payload) => ({
    type: CLEAR_ERROR,
    payload,
});

// Función para cambiar el estado del loader
export const toggleLoader = () => ({
    type: TOGGLE_LOADER
});

// Función para asignar favoritos
export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
})

// Función para asignar los pokemons. Esta función recibe los parámetros que
// necesitamos y adentro podemos hacer uso del dispatch, se pasa la logica dentro
// del dispatch. Esto con el fin de limpiar nuestro código y solo llamar la acción
// en el componente que necesitemos la información de los Pokemons.
// REDUX THUNK
export const fetchPokemonsWithDetails = (pokemons = []) => async(dispatch) => {
    try {
        // Disparamos la acción del loader para mostrar el spinner
        dispatch(toggleLoader());
        /* 
            Con promise.all() realizaremos una petición a cada pokemon mapeando el 
            arreglo que tiene todos los pokemones con la url y nombre. 
        */
        const pokemonsWithDetails = await Promise.all(
            pokemons.map(async(pokemon) => {
                const pokemonDetail = await axios.get(pokemon.url);
                return pokemonDetail.data;
            })
        );
        // Enviamos la información que hay en cada url de cada pokemon
        dispatch(setPokemons(pokemonsWithDetails));
        // Disparamos la acción del loader para ocultar el spinner
        dispatch(toggleLoader());
    } catch (error) {
        dispatch(setError({ message: "Oops! Something went wrong.", error }));
        // Disparamos la acción del loader para ocultar el spinner
        dispatch(toggleLoader());
    }
};