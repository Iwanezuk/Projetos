// import './App.css';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
// import './assets/css/base/base.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

function App() {
  return (
    <>
      <Home />
      <Sobre />
    </>
  );
}

export default App
