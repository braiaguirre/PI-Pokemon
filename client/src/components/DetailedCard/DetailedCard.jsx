// STYLES
import styles from './DetailedCard.module.css';

const DetailedCard = ({ pokemon }) => {
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;
    
    return (
        <div className={ styles.container }>
            <h2>{ name }</h2>
            <h3>XP: { xp }</h3>
            <h3>HP: { hp }</h3>
            <h3>ATTACK: { attack }</h3>
            <h3>DEFENSE: { defense }</h3>
            <h3>SPEED: { speed }</h3>
            <img src={ image } />
        </div>
    );
}

export default DetailedCard;