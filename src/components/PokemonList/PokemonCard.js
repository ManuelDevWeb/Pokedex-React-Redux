import { Image, Label, Grid, Icon } from "semantic-ui-react";

// Data
import { MAIN_COLOR, FAV_COLOR } from "../../utils/constants";

// Styles
import './styles.css';

const PokemonCard = ({pokemon}) => {
    const {name, sprites:{front_default}, types, id }=pokemon;

    return (
        <Grid.Column mobile={16} tablet={8} computer={4}>
            <div className="pokemonCard">
                <Icon name='favorite' color={FAV_COLOR} />
                <Image centered src={front_default} alt="Pokemon Front"/>
                <p className="pokemonCardTitle">{name}</p>
                {
                    types.map(type=>(
                        <Label color={MAIN_COLOR} key={`${id}-${type.type.name}`}>
                            {type.type.name}
                        </Label>
                    ))
                }                
            </div>
        </Grid.Column>
    );
}
 
export default PokemonCard;