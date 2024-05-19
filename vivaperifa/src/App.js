import './App.css';
import SobreNos from './pages/SobreNos/SobreNos';
import EventoComum from './components/CarrosselEvento/EventoComum/EventoComum';
import Header from './static/Header/Header';

function App() {

  return (
    <div className='container'>

      {/*Componente header*/}
      <Header 
        tipoCabecalho="home"
      />

      {/*Componente evento comum*/}
      <EventoComum></EventoComum>

      {/*Componente sobre nós*/}
      <SobreNos></SobreNos>

    </div>
    
  );
}

export default App;
