import { Image, Label, Grid, Icon } from "semantic-ui-react";

// Data
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";

// Styles
import './styles.css';

const PokemonCard = ({pokemon}) => {
    const {name}=pokemon;

    return (
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="pokemonCard">
                <Icon name='favorite' color={FAV_COLOR} />
                <Image centered src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="Pokemon Front"/>
                <p className="pokemonCardTitle">{name}</p>
                <Label color={MAIN_COLOR}>
                    Normal
                </Label>
            </div>
        </Grid.Column>
    );
}
 
export default PokemonCard;