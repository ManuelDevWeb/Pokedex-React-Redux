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
})