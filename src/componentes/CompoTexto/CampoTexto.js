import './CampoTexto.css';

const CampoTexto = (props)=> {

    return (
        <div class="form__campo">
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>    
        </div>
    )
}

export default CampoTexto