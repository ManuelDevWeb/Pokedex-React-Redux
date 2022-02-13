import { createStore } from "redux";

// Reducers
import pokemonReducer from "./reducers/pokemonReducer";

// Creación del Store
export const store = createStore(
    pokemonReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)