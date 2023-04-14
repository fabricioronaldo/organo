import CampoTexto from '../CompoTexto/CampoTexto';
import './formulario.css';

const Formulario = () => {
    
    return (
        <section className='formulario'>
            <form>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoTexto label="None" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem"placeholder="Informe o endereço de imagem"/>
            </form>
        </section>
    )
}

export default Formulario