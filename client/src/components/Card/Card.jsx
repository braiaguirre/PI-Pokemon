// STYLES
import styles from './Card.module.css';

const Card = (pokemon) => {
    // PROPS
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;

    return (
        <div className={ styles.container }>
            <h2>{ name }</h2>
        </div>
    );
}

export default Card;