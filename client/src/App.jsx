// STYLE
import './App.module.css';

// DEPENDENCIES
import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// VIEWS
import Detail from './views/Detail';
import Home from './views/Home';

function App() {
  // HOOKS
  const navigate = useNavigate();

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
        </Routes>}
    </>
  )
}

export default App
