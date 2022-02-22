// Actions type
import { SET_POKEMONS, SET_ERROR, CLEAR_ERROR, TOGGLE_LOADER, SET_FAVORITE } from "../actions/type";

// Estado inicial
const initialState = {
    list: [],
    error: '',
    loading: false
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
        case SET_FAVORITE:
            // Copia de la lista de pokemons
            const newPokemonList = [...state.list];
            /* 
                Validando que el id del pokemon que se quiere agregar sea igual al id de algún pokemon de la lista
                y así poder obtener su posición en la lista.
            */
            const currentPokemonIndex = newPokemonList.findIndex(pokemon => pokemon.id === action.payload.pokemonId);

            // Validando que se haya encontrado el pokemon en la lista
            if (currentPokemonIndex >= 0) {
                // Agregamos la propiedad favorito y su respectivo valor
                newPokemonList[currentPokemonIndex].favorited = !newPokemonList[currentPokemonIndex].favorited;
            }

            return {
                // Devolvemos una copia de lo que hay en el estado
                ...state,
                list: newPokemonList
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
        case TOGGLE_LOADER:
            return {
                // Devolvemos una copia de lo que hay en el estado
                ...state,
                // Agregamos al loader, el valor contrario que tenía
                loading: !state.loading
            }
        default:
            return {
                ...state
            }
    }
};

export default pokemonReducer;