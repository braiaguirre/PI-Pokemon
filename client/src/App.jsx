// STYLE
import './App.module.css';

// DEPENDENCIES
import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// VIEWS
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Detail from './views/Detail/Detail';
import Pokedex from './views/Pokedex/Pokedex';
import Error404 from './views/Error404/Error404';

const App = () => {
  // STATES
  const access = useSelector(state => state.access);

  return (
    <>
      {access ? 
        <Routes>
          <Route path="/" />
          <Route path="/signup" />
        </Routes>
      :
        <Routes>
          <Route path="/" />
          <Route path="/pokedex" />
          <Route path="/detail/:id" />
        </Routes>
      }
    </>
  )
}

export default App
