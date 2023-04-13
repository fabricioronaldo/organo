import Banner from './componentes/Banner/Banner';
import CampoTexto from './componentes/CompoTexto/CampoTexto'

function App() {
  return (
    <div className="App">
      <Banner />
      <CampoTexto label="None" placeholder="Digite seu nome"/>
      <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
      <CampoTexto label="Imagem"placeholder="Informe o endereço de imagem"/>
      
    </div>
  );
}

export default App;
