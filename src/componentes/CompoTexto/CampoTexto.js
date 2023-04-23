import './CampoTexto.css';

const CampoTexto = (props)=> {

    return (
        <div class="form__campo">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={props.placeholder}/>    
        </div>
    )
}

export default CampoTexto