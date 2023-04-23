import Botao from '../Botao';
import CampoTexto from '../CompoTexto/CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';



const Formulario = () => {
    const times = ['Progrmação','Front-End','Data Science','Devops','UX e Design','Mobile','Inovação e Gestão'];
    
    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('O Formulário foi submetido');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h1>Preencha os dados para criar o card do colaborador.</h1>
                <CampoTexto obrigatorio="true" label="None" placeholder="Digite seu nome"/>
                <CampoTexto obrigatorio="true" label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem"placeholder="Informe o endereço de imagem"/>
                <ListaSuspensa obrigatorio="true" label="Time" itens={times}/>
                <Botao texto="Criar Card" />
            </form>
        </section>
    )
}

export default Formulario