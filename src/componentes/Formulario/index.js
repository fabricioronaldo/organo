import CampoTexto from '../CompoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

const Formulario = () => {
    const times = ['Progrmação','Front-End','Data Science','Devops','UX e Design','Mobile','Inovação e Gestão'];
    return (
        <section className='formulario'>
            <form>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoTexto label="None" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem"placeholder="Informe o endereço de imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario