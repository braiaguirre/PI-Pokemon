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
import NameSearch from './components/NameSearch/NameSearch'

// ACTIONS
import { getPokemonTypes, getPokedex, getPokemonAbilities } from './redux/actions/actions';

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
}, []);

  return (
    <>
      { popup.type === 'GET_POKEMONS' && 
        <div className={ styles.popupContainer }>
          <GetPokemons />
        </div>
      }
      { popup.type === 'NAME_SEARCH' && 
        <div className={ styles.popupContainer }>
          <NameSearch />
        </div>
      }
      { popup.type === 'CREATE_POKEMON' && 
        <div className={ styles.popupContainer }>
          <CreatePokemon />
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
              </Routes>
            </>
          }
        </>
      }
    </>
  )
}

export default App
