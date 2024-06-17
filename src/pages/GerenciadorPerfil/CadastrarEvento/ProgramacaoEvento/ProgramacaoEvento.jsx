import CampoForm from '../../../../components/CampoForm/CampoForm';
import Botao from '../../../../components/Botao/Botao';
import './ProgramacaoEvento.css';
import { Link } from 'react-router-dom';

export default function ProgramacaoEvento() {

    return (
        <div className="container-prog-evento">
            <div className="conteudo-prog-evento">
                <div className='prog-evento__header'>
                    <h2>Programação</h2>
                    <p>Adicione a programação do seu evento, quanto mais precisos forem os dados da sua programação, mais confiança o seu público terá em você.</p>
                </div>

                <div className="prog-evento__form">
                    <CampoForm id='data-prog-evento' tipo='text' legenda='' tamanhoCampo='160%' tituloForm="Data do evento" />
                    <CampoForm id='hora-inic-prog-evento' tipo='text' legenda='' tamanhoCampo='160%' tituloForm="Horário de início" />
                    <CampoForm id='data-fim-prog-evento' tipo='text' legenda='' tamanhoCampo='160%' tituloForm="Horário de fim" />
                    <span>Lorem ipsum</span>
                </div>

                <div className="btn-prog-evento">
                    <Link to="/descricao-evento">
                        <span>Voltar</span>
                    </Link>
                    <Link to="/localizacao-evento">
                        <Botao
                            legenda="Avançar"
                            gradiente="var(--cor-laranja)"
                            bordaRaio="10px"
                            grossuraBorda="50px"
                            espacamento="10px"
                            largura="180px"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}