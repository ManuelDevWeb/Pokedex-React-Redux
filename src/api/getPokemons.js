// Importando configuración de Axios
import axiosInstance from "./config";

// Función para obtener pokemons
export const getPokemons = (limit = 171) =>
    axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error)
);