// STYLES
import styles from './DetailedCard.module.css';

// DEPENDENCIES
import { useNavigate } from 'react-router-dom';

const DetailedCard = ({ pokemon }) => {

    // HOOKS
    const navigate = useNavigate();

    // HANDLERS
    const pokeballHandler = () => navigate('/');
    const pokedexHandler = () => navigate('/pokedex');
    
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;
    return (
        <>
            <h2>Pokemon Details</h2>
            <div className={ styles.container }>
            <div className={ styles.col1 }>
                <img src={ image } />
                <div className={ styles.row }>
                    <h2>{ name }</h2>
                    <h4 className={`${styles.bubble} ${styles.id}`}>#{ id }</h4>
                </div>
                <div className={ styles.row }>
                    { types && types.map(type => <h4 className={`${styles.bubble} ${styles[type]}`} key={ type.id }>{ type }</h4> ) }
                </div>
                <div className={ styles.row }>
                    { abilities && abilities.map(abilities => <h4 className={`${styles.bubble} ${styles.id}`} key={ abilities.id }>{ abilities }</h4> ) }
                </div>
            </div>

            <div className={ styles.col2 }>
                <h3><b>STATS:</b></h3>
                <div className={ styles.item }>
                    <h4><b>HP:</b> { hp }</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>XP:</b> { xp }</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>SPEED:</b> { speed }</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>ATTACK:</b> { attack }</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>DEFENSE:</b> { defense }</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>SP ATTACK:</b> { spAttack }</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>SP DEFENSE:</b> { spDefense }</h4>
                </div>

                <h3><b>PHYSIC:</b></h3>
                <div className={ styles.item }>
                    <h4><b>HEIGHT:</b> { height }m.</h4>
                </div>
                <div className={ styles.item }>
                    <h4><b>WEIGHT:</b> { weight }kg.</h4>
                </div>
            </div>
        </div>
        <div>
            <button onClick={ pokeballHandler }>Pokeball</button>
            <button onClick={ pokedexHandler }>Pokedex</button>
        </div>
        </>
    );
}

export default DetailedCard;