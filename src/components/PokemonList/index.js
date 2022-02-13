import { Grid } from 'semantic-ui-react';

// Components
import PokemonCard from './PokemonCard';

const PokemonList = ({listPokemons}) => {
    return (
        <Grid className="pokemonList">
            {
                listPokemons.map( (pokemon, id) => (
                    <PokemonCard pokemon={pokemon} key={`pokemon-${id}`} />
                ))
            }
        </Grid>
    );
}

PokemonList.defaultProps={
    listPokemons: []
}
 
export default PokemonList;