// STYLES
import styles from './DetailedCard.module.css';

const DetailedCard = ({ pokemon }) => {
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;
    
    return (
        <div className={ styles.container }>
            <div className={ styles.col }>
                <img src={ image } />
                <h2>{ name }</h2>
                <div className={ styles.types }>
                    { types.map(type => <h4 className={`${styles.bubble} ${styles[type]}`}>{ type }</h4> ) }
                </div>
            </div>
            <div className={ styles.col }>
                <div className={ styles.row }>
                    <div className={ styles.col }>
                        <h2>{ hp }</h2>
                        <h4>HP</h4>
                    </div>
                    <div className={ styles.col }>
                        <h2>{ attack }</h2>
                        <h4>ATTACK</h4>
                    </div>
                    <div className={ styles.col }>
                        <h2>{ defense }</h2>
                        <h4>DEFENSE</h4>
                    </div>
                </div>
            </div>
            <div className={ styles.info }>
                <div className={ styles.row }>
                    <div className={ styles.col }>
                        <h2>{ xp }</h2>
                        <h4>XP</h4>
                    </div>
                    <div className={ styles.col }>
                        <h2>{ spAttack }</h2>
                        <h4>SPECIAL ATTACK</h4>
                    </div>
                    <div className={ styles.col }>
                        <h2>{ spDefense }</h2>
                        <h4>SPECIAL DEFENSE</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailedCard;