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

// ACTIONS
import { clearPokedex, getPokedexRaw, clearPokedexRaw, getPokedex } from './redux/actions/actions';

const App = () => {
  // HOOKS
  const dispatch = useDispatch();

  // STATES
  const access = useSelector(state => state.access);
  const alert = useSelector(state => state.alert);
  const popup = useSelector(state => state.popup);
  const pokedexRaw = useSelector(state => state.pokedexRaw);
  const [loading, setLoading] = useState(true);

  // LOAD INITIAL APP DATA
  useEffect(() => {
    if (!pokedexRaw.length) dispatch(getPokedexRaw());
    else if (!loading) dispatch(getPokedex(1));
    else setLoading(false);
    return () => {
      clearPokedex();
      clearPokedexRaw();
    }
}, [pokedexRaw]);

  return (
    <>
      { alert.type === 'ALERT' &&
        <div className={ styles.popupContainer }>
          <Alert />
        </div>
      }
      { popup.type === 'GET_POKEMONS' && 
        <div className={ styles.popupContainer }>
          <getPokedexRaw />
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
