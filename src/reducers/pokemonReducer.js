// Actions
import { SET_POKEMON } from "../actions/type";

// Estado inicial
const initialState = {
    list: []
}

// Función pura que recibe el estado y la acción
const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMON:
            return {
                // Devolvemos una copia de lo que hay en el estado
                ...state,
                // Agregamos a la lista, el valor que nos llega desde el action
                list: action.payload
            };
        default:
            return {
                ...state
            };
    }
};

export default pokemonReducer;