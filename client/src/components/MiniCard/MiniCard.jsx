// STYLES
import styles from './MiniCard.module.css';

// UTILS
import pokeball from '../../assets/pokeball.png';

const MiniCard = ({ pokemon }) => {
    // PROPS
    const { id, name, image } = pokemon;

    return (
        <div className={ styles.container }>
            <h2>{ name }</h2>
            <img src={ image ? image : pokeball } />
        </div>
    );
}

export default MiniCard;