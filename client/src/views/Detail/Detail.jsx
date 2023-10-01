// STYLES
import styles from './Detail.module.css';

// DEPENDENCIES
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

// COMPONENTS
import DetailedCard from '../../components/DetailedCard/DetailedCard';

// ACTIONS
import { getPokemonDetail, clearPokemonDetail } from '../../redux/actions/actions';

const Detail = () => {
    document.title = 'PokeHenry > Detail';

    // HOOKS
    const dispatch = useDispatch();
    
    // STATES
    const { id } = useParams();
    const pokemon = useSelector(state => state.pokemonDetail);
    
    // LOAD DATA
    useEffect(() => {
        dispatch(getPokemonDetail(id));
        return () => dispatch(clearPokemonDetail());
    }, [])

    return (
        <div className={ styles.container }>
            <DetailedCard pokemon={ pokemon } />
        </div>
    );
}

export default Detail;