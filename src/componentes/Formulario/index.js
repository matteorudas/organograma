import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { useState } from 'react';
import './Formulario.css';

const Formulario = (props) => {  
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCdtr({
            nome,
            cargo,
            email,
            imagem,
            time
        })
        
        setNome('');
        setCargo('');
        setEmail('');
        setImagem('');
        setTime('');
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Prencha os dados do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome:" 
                    placeholder="Digite seu nome..."
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}/> 
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo:"  
                    placeholder="Digite seu cargo..."
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Email:"  
                    placeholder="Digite seu Email..."
                    valor={email}
                    aoAlterado={valor => setEmail(valor)}/>
                <CampoTexto 
                    label="Imagem:" 
                    placeholder="Informe a URL da sua imagem..."
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}/> 
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Times:" 
                    itens={props.time}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}/>      
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;