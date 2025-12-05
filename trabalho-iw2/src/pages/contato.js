import { Link } from 'react-router-dom';
import Estilo from '../components/style/estilo.css';

export default function Contato(){
    return(
        <div className="container"  style={{background:"#006d1bff"}}>
            <div className='contato'>
            <h1 className="title">Contato</h1>
            <a href='https://github.com/RC-Figueiredo' target='_blank'> GITHUB</a>
            <p>GMAIL: renatofigueiredo575@gmail.com</p>
            <p> Telefone: (14)997****88</p>
            </div>
        </div>
    )
}