import './button.css'

function Botao(props){
    return(
        <div>
        <button onClick={props.onclick}>{props.texto}</button>
        </div>
        
    )
    
}

export default Botao;
