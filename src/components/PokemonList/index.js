import { Grid } from 'semantic-ui-react';

// Components
import PokemonCard from './PokemonCard';

const PokemonList = () => {
    // Array de pokemons
    const pokemon=Array(20).fill('');

    return (
        <Grid className="pokemonList">
            {
                pokemon.map( pokemon => (
                    <PokemonCard/>
                ))
            }
        </Grid>
    );
}
 
export default PokemonList;