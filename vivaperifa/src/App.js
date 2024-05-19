import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import EventoComum from './components/CarrosselEvento/EventoComum/EventoComum';
import Header from './static/Header/Header';
import FormFaleConosco from './components/FormFaleConosco/FormFaleConosco';
import CarrosselEvento from './components/CarrosselEvento/CarrosselEvento';
import Depoimento from './components/ContainerDepoimentos/Depoimento/Depoimento';
import fotoUsuario from './assets/fotoUsuario.png';

function App() {

  return (
    <div className='container'>

      {/*Componente header*/}
      <Header 
        tipoCabecalho="home"
      />

      {/*Componente evento comum*/}
      <CarrosselEvento tituloCarrossel="Acontece Na Zona Leste">
        
      </CarrosselEvento>
      {/*Componente sobre nós*/}
      <SobreNos></SobreNos>
      <Depoimento fotoUsuario= {fotoUsuario}></Depoimento>
      {/*Componente Formulario Fale Conosco*/}
      <FormFaleConosco></FormFaleConosco>

    </div>
    
  );
}

export default App;
