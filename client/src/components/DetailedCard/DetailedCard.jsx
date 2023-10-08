// STYLES
import styles from './DetailedCard.module.css';

const DetailedCard = ({ pokemon }) => {
    
    const { id, name, xp, hp, attack, spAttack, defense, spDefense, speed, height, weight, custom, types, abilities, image } = pokemon;
    return (
        <div className={ styles.container }>
            <div className={ styles.col1 }>
                <img src={ image } />
                <div className={ styles.row }>
                    <h2>{ name }</h2>
                    <h4 className={`${styles.bubble} ${styles.id}`}>#{ id }</h4>
                </div>
                <div className={ styles.row }>
                    { types && types.map(type => <h4 className={`${styles.bubble} ${styles[type]}`}>{ type }</h4> ) }
                </div>
                <div className={ styles.row }>
                    { abilities && abilities.map(abilities => <h4 className={`${styles.bubble} ${styles.id}`}>{ abilities }</h4> ) }
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

                        
            {/* <div className={ styles.row }>
                <div className={ styles.item }>
                    <h2>{ hp }</h2>
                    <h4>HP</h4>
                </div>
                <div className={ styles.item }>
                    <h2>{ attack }</h2>
                    <h4>ATTACK</h4>
                </div>
                <div className={ styles.item }>
                    <h2>{ defense }</h2>
                    <h4>DEFENSE</h4>
                </div>
            </div>
            <div className={ styles.row }>
                <div className={ styles.item }>
                    <h2>{ spAttack }</h2>
                    <h4>SP ATTACK</h4>
                </div>
                <div className={ styles.item }>
                    <h2>{ xp }</h2>
                    <h4>XP</h4>
                </div>
                <div className={ styles.item }>
                    <h2>{ spDefense }</h2>
                    <h4>SP DEFENSE</h4>
                </div>
            </div>
            <div className={ styles.row }>
                <div className={ styles.item }>
                    <h2>{ speed }</h2>
                    <h4>SPEED</h4>
                </div>
                <div className={ styles.citeml }>
                    <h2>{ height }</h2>
                    <h4>HEIGHT</h4>
                </div>
                <div className={ styles.item }>
                    <h2>{ weight }</h2>
                    <h4>WEIGHT</h4>
                </div>
            </div> */}
        </div>
    );
}

export default DetailedCard;