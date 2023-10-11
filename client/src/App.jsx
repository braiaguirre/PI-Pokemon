// STYLE
import styles from './App.module.css';

// DEPENDENCIES
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector  } from 'react-redux';

// VIEWS
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Detail from './views/Detail/Detail';
import Pokedex from './views/Pokedex/Pokedex';
import Error404 from './views/Error404/Error404'; // TODO: FIX

// COMPONENTS
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';
import GetPokemons from './components/GetPokemons/GetPokemons'
import CreatePokemon from './components/CreatePokemon/CreatePokemon'
import ProfilePopup from './components/ProfilePopup/ProfilePopup'
import NameSearch from './components/NameSearch/NameSearch'

// ACTIONS
import { getPokemonTypes, getPokedex, getPokemonAbilities, clearFilters } from './redux/actions/actions';

const App = () => {
  // HOOKS
  const dispatch = useDispatch();

  // STATES
  const access = useSelector(state => state.access);
  const alert = useSelector(state => state.alert);
  const popup = useSelector(state => state.popup);
  const loading = useSelector(state => state.config.loaded);

  // LOAD INITIAL APP DATA
  useEffect(() => {
    dispatch(getPokemonAbilities());
    dispatch(getPokemonTypes());
    dispatch(getPokedex());
    return () => {
      dispatch(clearFilters());
    }
}, []);

  return (
    <>
      { popup.type !== '' && 
        <div className={ styles.popupContainer }>
          { popup.type === 'GET_POKEMONS' && <GetPokemons /> }
          { popup.type === 'NAME_SEARCH' && <NameSearch /> }
          { popup.type === 'CREATE_POKEMON' && <CreatePokemon /> }
          { popup.type === 'PROFILE' && <ProfilePopup /> } 
        </div>
      }
      { alert.type === 'ALERT' &&
        <div className={ styles.alertPopupContainer }>
          <Alert />
        </div>
      }
      { !access ? 
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
      :
        <>
          { loading ? 
            <h1>LOADING DATA</h1>
          :
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/pokedex" element={ <Pokedex /> } />
                <Route path="/detail/:id" element={ <Detail /> } />
                <Route path="*" element={ <Error404 /> } />
              </Routes>
            </>
          }
        </>
      }
    </>
  )
}

export default App
