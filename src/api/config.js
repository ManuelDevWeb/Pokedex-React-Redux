import axios from 'axios';

// URL API
const URL = process.env.POKEAPI || 'https://pokeapi.co/api/v2/';

// Instanciando Axios
const axiosInstance = axios.create({
    baseURL: URL
});

export default axiosInstance;