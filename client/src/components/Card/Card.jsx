// STYLES
import styles from './Card.module.css';

// DEPENDENCIES
import { useNavigate } from 'react-router-dom';

const Card = ({ pokemon }) => {
    // PROPS
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;

    // HOOKS
    const navigate = useNavigate();

    // HANDLERS
    const detailHandler = () => navigate(`/detail/${id}`)

    return (
        <div className={ styles.container }>
            <h2>{ name }</h2>
            <img onClick={ detailHandler } src={ image } />
        </div>
    );
}

export default Card;