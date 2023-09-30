// STYLES
import styles from './MiniCards.module.css';

// COMPONENTS
import MiniCard from '../MiniCard/MiniCard';

const MiniCards = ({ pokemons }) => {
    
    return (
        <div className={ styles.container }>
            { pokemons.length && pokemons.map(pokemon => <MiniCard pokemon={ pokemon } key={ pokemon.id } />) }
        </div>
    );
}

export default MiniCards;