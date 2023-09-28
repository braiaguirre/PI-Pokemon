// STYLE
import './App.module.css';

// DEPENDENCIES
import { useEffect } from 'react';
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
import Navbar from './components/Navbar/Navbar';

// ACTIONS
import { getPokemonById } from './redux/actions/actions';

const App = () => {
  // HOOKS
  const dispatch = useDispatch();

  // STATES
  const access = useSelector(state => state.access);
  const alert = useSelector(state => state.alert);
  const popup = useSelector(state => state.popup);

  useEffect(() => {
    dispatch(getPokemonById(2));
  }, []);

  return (
    <>
      {!access ? 
        <Routes>
          <Route path="/" element={ <Login /> } />
          <Route path="/signup" element={ <Signup /> } />
        </Routes>
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
  )
}

export default App
