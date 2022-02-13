import { SET_POKEMON } from "./type";

// Función para asignar la lista de pokemones
export const setPokemons = (payload) => ({
    type: SET_POKEMON,
    payload
})