import CampoForm from '../../components/CampoForm/CampoForm';
import './CadastroOrganizador.css';
import LogoCadastro from '../../assets/logo.png';
import { useState, useEffect } from 'react';

export default function CadastroOrganizador() {

    const [containerAtivo, setContainerAtivo] = useState(false);

        useEffect(() => {
            const containerCadastro = document.getElementById('container_cadastro');
            const btnOrgBtn = document.getElementById('btn_org');
            const btnUserBtn = document.getElementById('btn_user');

            btnOrgBtn.addEventListener('click', () => {
            containerCadastro.classList.add('active');
            setContainerAtivo(true);
            });

            btnUserBtn.addEventListener('click', () => {
            containerCadastro.classList.remove('active');
            setContainerAtivo(false);
            });

            // Remover os event listeners quando o componente for desmontado
            return () => {
            btnOrgBtn.removeEventListener('click', () => {
                containerCadastro.classList.add('active');
                setContainerAtivo(true);
            });
            btnUserBtn.removeEventListener('click', () => {
                containerCadastro.classList.remove('active');
                setContainerAtivo(false);
            });
            };
        }, []); // Sem dependências, executa apenas uma vez ao montar o componente

    return (
        <div className='container_cadastro' id='container_cadastro'>

            <div className='container-cadastro-box'>

                <div className='form-container-cadastro form-user'>
                    <form action=''>
                        <h2>Usuário</h2>

                        <CampoForm id='nome-user' tipo='text' legenda='Digite seu nome' tamanhoCampo='80%' tituloForm="Nome"/>

                        <CampoForm id='tel-user' tipo='text' legenda='Digite seu telefone' tamanhoCampo='80%' tituloForm="Telefone"/>

                        <CampoForm id='email-user' tipo='text' legenda='Digite seu e-mail' tamanhoCampo='80%' tituloForm="E-mail"/>

                        <CampoForm id='senha-user' tipo='text' legenda='Crie uma senha' tamanhoCampo='80%' tituloForm="Senha"/>

                        <div className='btn-cadastro'>
                            <button>Cadastrar</button>
                        </div>
                    </form>
                </div>

                <div className='form-container-cadastro form-org'>
                    <form action=''>
                        <h2>Organizador</h2>

                        <CampoForm id='nome-org' tipo='text' legenda='Digite o nome da empresa' tamanhoCampo='80%' tituloForm="Nome da empresa" />

                        <CampoForm id='cnpj-org' tipo='text' legenda='Digite o CNPJ da empresa' tamanhoCampo='80%' tituloForm="CNPJ"/>

                        <CampoForm id='tel-org' tipo='text' legenda='Digite seu telefone' tamanhoCampo='80%' tituloForm="Telefone"/>

                        <CampoForm id='email-org' tipo='text' legenda='Digite seu e-mail' tamanhoCampo='80%' tituloForm="E-mail"/>

                        <CampoForm id='senha-org' tipo='text' legenda='Crie uma senha' tamanhoCampo='80%' tituloForm="Senha"/>

                        <div className='btn-cadastro'>
                            <button>Cadastrar</button>
                        </div>

                    </form>
                </div>

                <div className='toggle-container'>
                    <div className='toggle'>
                        <div className='toggle-panel toggle-left'>

                            <img className='logo_cadastro' src={LogoCadastro} alt='' />

                            <h2>Cadastre-se</h2>

                            <p>Deseja cadastrar-se como usuário comum?</p>

                            <div className='btn-cadastro'>
                                <button className='btn-user-org' id='btn_user'>Usuário</button>
                            </div>

                        </div>

                        <div className='toggle-panel toggle-right'>

                            <img className='logo_cadastro' src={LogoCadastro} alt=''/>

                            <h2>Cadastre-se</h2>

                            <p>Deseja cadastrar-se como organizador?</p>

                            <div className='btn-cadastro'>
                                <button className='btn-user-org' id='btn_org' >Organizador</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}