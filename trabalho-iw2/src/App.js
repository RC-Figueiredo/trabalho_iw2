import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from './pages/home';
import Sobre from './pages/sobre';
import Ajuda from './pages/ajuda';
import Contato from './pages/contato';

export default function App(){
  return(
    <Router>
      <nav className="nav">
        <Link to="/" className="link">Home</Link>
        <Link to="/Sobre" className="link">Sobre</Link>
        <Link to="/Ajuda" className="link">Ajuda</Link>
        <Link to="/Contato" className="link">Contato</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sobre" element={<Sobre/>} />
        <Route path="/Ajuda" element={<Ajuda/>} />
        <Route path="/Contato" element={<Contato/>} />        

      </Routes>
    </Router>
  );
}


