// STYLES
import styles from './NameSearch.module.css';
import loader from '../../utils/loader.module.css'

// DEPENDENCIES
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// ACTIONS
import { setAlert, clearPopup, getPokemonByName, clearPokemonDetail } from '../../redux/actions/actions';

const NameSearch = () => {
    document.title = 'PokeHenry > Search';
    
    // HOOKS
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, image } = useSelector(state => state.pokemonDetail);

    // STATES
    const [name, setName] = useState('');

    // HANDLERS
    const closeHandler = (e) => {
        e.preventDefault();
        dispatch(clearPokemonDetail());
        dispatch(clearPopup());
    }
    const changeHandler = (e) => {
        setName(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (name.length) {
            dispatch(getPokemonByName(name.toLowerCase()));
        }
        else dispatch(setAlert({
            title: 'Oops!',
            message: 'Insert Pokemon name',
            type: 'ALERT'
        }));
    }
    const detailHandler = () => {
        if (id) {
            navigate(`/detail/${id}`);
            dispatch(clearPopup());
        }
        else dispatch(setAlert({
            title: 'Oops!',
            message: 'Insert Pokemon name',
            type: 'ALERT'
        })); 
    }

    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.title }>
                    <h2>Search Pokemon by name</h2>
                    <h4>Click on image to view details</h4>
                </div>
                <form onSubmit={ submitHandler }>
                    <div className={ styles.fields }>
                        <input name="name" onChange={ changeHandler } placeholder="Name" /> 
                    <div className={ styles.imageContainer }>
                        { image ? <img src={ image } onClick={ detailHandler } /> : <div className={ loader.loader }></div> }
                    </div>
                    </div>
                    <div className={ styles.buttons }>
                        <button onClick={ closeHandler }>Close</button>
                        <button>Search</button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default NameSearch;