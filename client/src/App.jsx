// STYLE
import styles from './App.module.css';

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
import Alert from './components/Alert/Alert';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  // HOOKS
  const dispatch = useDispatch();

  // STATES
  const access = useSelector(state => state.access);
  const popup = useSelector(state => state.popup);

  return (
    <>
      { popup.type === 'alert' &&
        <div className={ styles.popupContainer }>
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
