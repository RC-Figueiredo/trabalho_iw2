import Estilo from '../components/style/estilo.css';

export default function Sobre(){
    return(
        <div className="container" style={{background:"#002e78ff"}}>
            <div className='sobre'>
            <h1 className="title" >Sobre</h1>
            <p> Este site foi desenvolvido como parte de uma atividade escolar do professor Fernando. 
                O objetivo do projeto é praticar a criação de interfaces modernas usando React, uma 
                das bibliotecas mais utilizadas no desenvolvimento web. Toda a estrutura foi construída 
                de forma simples e organizada, com componentes reutilizáveis e foco em um visual limpo e 
                fácil de navegar. O site demonstra conhecimentos básicos de front-end, como uso de estados, rotas, 
                estilização e boas práticas de construção de páginas</p>
            </div>
        </div>
    )
}