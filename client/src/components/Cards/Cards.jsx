// STYLES
import styles from './Cards.module.css';

// COMPONENTS
import Card from '../Card/Card';

const Cards = ({ pokemons }) => {
    
    return (
        <div className={ styles.container }>
            { pokemons.length > 0 && pokemons.map(pokemon => <Card pokemon={ pokemon } key={ pokemon.id } />) }
        </div>
    );
}

export default Cards;