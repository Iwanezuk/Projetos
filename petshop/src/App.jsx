import './assets/css/base/base.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'; 

import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';
import SubCategoria from './paginas/SubCategorias';
import CategoriaPosts from './paginas/CategoriaPosts'; // Importe o novo componente

function App() {
  return (
    <Router>
      <Cabecalho />
      <Routes>
        {/* Use element={<Componente />} para renderizar */}
        <Route path='/' element={<Home />} /> 
        <Route path='/sobre' element={<Sobre />} />
        <Route path='/posts/:id' element={<Post />} />

        {/* 
          Esta é a rota pai. Ela renderiza o <Categoria />
        */}
        <Route path='/categoria/:id' element={<Categoria />}>
          
          {/* Esta é a rota "filho" de índice (index).
            Ela é renderizada dentro do <Outlet> quando a URL
            é exatamente /categoria/:id 
          */}
          <Route index element={<CategoriaPosts />} />
          
          {/* Esta é a rota "filho" da subcategoria.
            Ela é renderizada dentro do <Outlet> quando a URL
            é /categoria/:id/:subcategoria 
          */}
          <Route path=':subcategoria' element={<SubCategoria />} />
        
        </Route>

        <Route path='*' element={<Pagina404 />} />
      </Routes>
    </Router>
  )
}

export default App