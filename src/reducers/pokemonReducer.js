// Actions type
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR } from "../actions/type";

// Estado inicial
const initialState = {
    list: [],
    error: ''
}

// Función pura que recibe el estado y la acción
const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                // Devolvemos una copia de lo que hay en el estado
                ...state,
                // Agregamos a la lista, el valor que nos llega desde el action
                list: action.payload
            }
        case SET_ERROR:
            return {
                // Devolvemos una copia de lo que hay en el estado
                ...state,
                // Agregarmos al error, el valor que nos llega desde el action
                error: action.payload
            }
        case CLEAR_ERROR:
            return {
                // Devolvemos una copia de lo que hay en el estado
                ...state,
                // Agregamos al error, un valor vacío para limpiar el error
                error: ''
            }
        default:
            return {
                ...state
            }
    }
};

export default pokemonReducer;