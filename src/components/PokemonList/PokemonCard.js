import { useDispatch } from "react-redux";
import { Image, Label, Grid, Icon } from "semantic-ui-react";

// Actions
import {setFavorite} from '../../actions';

// Data
import { MAIN_COLOR, FAV_COLOR, DEFAULT_COLOR } from "../../utils/constants";

// Styles
import "./styles.css";

const PokemonCard = ({ pokemon }) => {
  // useDispatch() dispara acciones
  const dispatch = useDispatch();

  const {
    name,
    sprites: { front_default },
    types,
    id,
  } = pokemon;

  // Función que se ejecuta al dar click en la estrella de la tarjeta
  const handleFavorite = () => {
    dispatch(setFavorite({pokemonId: pokemon.id}));
  };

  const color= pokemon.favorited ? FAV_COLOR : DEFAULT_COLOR;

  return (
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <div className="pokemonCard">
        <button className="pokemonCardFavorite" onClick={handleFavorite}>
          <Icon name="favorite" color={color} />
        </button>
        <Image centered src={front_default} alt="Pokemon Front" />
        <p className="pokemonCardTitle">{name}</p>
        {types.map((type) => (
          <Label color={MAIN_COLOR} key={`${id}-${type.type.name}`}>
            {type.type.name}
          </Label>
        ))}
      </div>
    </Grid.Column>
  );
};

export default PokemonCard;
