// STYLES
import styles from './Card.module.css';

// DEPENDENCIES
import { useNavigate } from 'react-router-dom';

const Card = ({ pokemon }) => {
    // PROPS
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;
    console.log(name, types);
    // HOOKS
    const navigate = useNavigate();

    // HANDLERS
    const detailHandler = () => navigate(`/detail/${id}`);

    return (
        <div className={ styles.container }>
            <img onClick={ detailHandler } src={ image } />
            <div className={ styles.title }>
                <h2 onClick={ detailHandler }>{ name }</h2>
                <h4 className={`${styles.bubble} ${styles.id}`}>#{ id }</h4>
            </div>
            <div className={ styles.types }>
                { types.map(type => <h4 className={`${styles.bubble} ${styles[type]}`}>{ type }</h4> ) }
            </div>
            <div className={ styles.footer }>
                <div className={ styles.col }>
                    <h2>{ hp }</h2>
                    <h4>HP</h4>
                </div>
                <div className={ styles.col }>
                    <h2>{ attack }</h2>
                    <h4>ATT</h4>
                </div>
                <div className={ styles.col }>
                    <h2>{ defense }</h2>
                    <h4>DEF</h4>
                </div>
            </div>
        </div>
    );
}

export default Card;