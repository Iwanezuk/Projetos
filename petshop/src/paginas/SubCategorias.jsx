import { useParams } from 'react-router-dom';
import ListaPost from '../components/ListaPost';

const SubCategoria = () => { 
  // Captura o parâmetro :subcategoria da URL
  const { subcategoria } = useParams();
  
  return(
    // Renderiza o ListaPost com a URL de busca filtrada pela subcategoria
    <ListaPost url={`/posts?subcategoria=${subcategoria}`} />
  )
}

export default SubCategoria;