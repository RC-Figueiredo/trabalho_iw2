import Estilo from '../components/style/estilo.css';

export default function Ajuda(){
    return(
        <div className="container" style={{background:"#c4a700ff"}}>
            <div className='ajuda'>
            <h1 className="title"> Ajuda</h1>
            <input type="text" className="form-control" placeholder="Digite sua dúvida aqui..." aria-label="Username" aria-describedby="basic-addon1"/>
            <button className="btn_login mt-3">Enviar</button>
            </div>
        </div>
    )
}