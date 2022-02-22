import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Middlewares
import logActions from './middlewares';

// Reducers
import pokemonReducer from "./reducers/pokemonReducer";

// Customizando compose para utilizar (REDUX THUNK)
const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composeEnhacers = composeAlt(
    // Aplicando nuestros middlewares personalizados
    applyMiddleware(thunk, logActions)
);


// Creación del Store
export const store = createStore(
    pokemonReducer,
    composeEnhacers
);