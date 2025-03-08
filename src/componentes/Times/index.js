import Colaborador from '../Colaborador';
import './Times.css';

const Times = (props) => {
    const corP = { backgroundColor: props.corSecundaria }
    const corS = { borderColor: props.corPrimaria }
    return(
        props.colaboradores.length > 0 && <section className="times" style={corP}>
            <h3 style={corS}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador
                corFundo={props.corPrimaria} 
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                email={colaborador.email}
                imagem={colaborador.imagem}   
                />)}
            </div>    
        </section>
    )
}
export default Times;