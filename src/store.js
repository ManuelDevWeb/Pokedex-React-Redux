import { createStore, compose, applyMiddleware } from "redux";

// Middlewares
import logActions from './middlewares';

// Reducers
import pokemonReducer from "./reducers/pokemonReducer";

const composeEnhacers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // Aplicando nuestros middlewares personalizados
    applyMiddleware(logActions)
)

// Creación del Store
export const store = createStore(
    pokemonReducer,
    composeEnhacers
)