// STYLES
import styles from './Cards.module.css';

const Cards = (pokemons) => {
    
    return (
        <div className={ styles.container }>
            { pokemons.map(pokemon => <Card pokemon={ pokemon } />) }
        </div>
    );
}

export default Cards;