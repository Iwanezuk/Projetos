import './assets/css/base/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Páginas Públicas
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Pagina404 from './paginas/Pagina404';
import Cabecalho from './components/Cabecalho';
import Post from './paginas/Post';
import Categoria from './paginas/Categoria';

// Páginas Admin (Layout e Componentes)
import AdminLayout from './paginas/admin/AdminLayout'; // (O layout que criamos)
import Admin from './paginas/admin/Admin';
import FormCategoria from './paginas/admin/components/FormCategoria';
import CatAdmin from './paginas/admin/CatAdmin';
import FormSubCategoria from './paginas/admin/components/FormSubCategoria';
import PostAdmin from './paginas/admin/PostAdmin';
import FormPost from './paginas/admin/components/FormPost';

function App() {
    return (
        <Router>
            <Cabecalho />
            <Routes>
                {/* Rotas Públicas */}
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/categoria/:id/*' element={<Categoria />} />
                {/* (Usando o aninhamento) */}
                <Route path='/posts/:id' element={<Post />} />

                {/* Rotas Administrativas Aninhadas */}
                <Route path="/admin" element={<AdminLayout />}>
                    {/* A rota "index" é o que carrega em /admin */}
                    <Route index element={<Admin />} />

                    {/* Rotas de Categoria */}
                    <Route path="NovaCategoria" element={<FormCategoria />} />
                    <Route path="categoria/:id" element={<FormCategoria />} />

                    {/* Rotas de Subcategoria */}
                    <Route path="categoria/sub/:id" element={<CatAdmin />} />
                    <Route path="categoria/sub/form/:id" element={<FormSubCategoria />} />

                    {/* (Rotas de Post serão adicionadas aqui) */}
                    <Route path="posts" element={<PostAdmin />} />
                    <Route path="posts/NovoPost" element={<FormPost />} />
                    <Route path="posts/:id" element={<FormPost />} />
                </Route>

                {/* Rota 404 */}
                <Route path='*' element={<Pagina404 />} />
            </Routes>
        </Router>
    );
}

export default App;