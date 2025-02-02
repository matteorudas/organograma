import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = () => {  

    const times = ['Desenvolvimento', 'Marketing', 'Comercial', 'Financeiro', 'Administrativo'];

    return (
        <section className='formulario'>
            <form>
                <h2>Prencha os dados do colaborador</h2>
                <CampoTexto label="Nombre:" placeholder="Digite seu nome..."/> 
                <CampoTexto label="Cargo:"  placeholder="Digite seu cargo..."/>
                <CampoTexto label="Email:"  placeholder="Digite seu Email..."/>
                <CampoTexto label="Imagem:" placeholder="Informe a URL da sua imagem..."/> 
                <ListaSuspensa label="Times:" itens={times}/>      
            </form>
        </section>
    )
}

export default Formulario;