import Colaborador from '../Colaborador';
import './Times.css';
import hexToRgba from 'hex-to-rgba';


const Times = ({time, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
    const imgFundo = { backgroundImage: `url(/imagens/fundo.png)` }
    const corP = { backgroundColor: hexToRgba(time.cor, '0.8') }
    const corS = { borderColor: time.cor }
    return(
        colaboradores.length > 0 && <section className="times" style={{...imgFundo, ...corP}}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-cor'/>
            <h3 style={corS}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice)=> { 
                    return (
                        <Colaborador
                            corFundo={time.cor} 
                            key={indice}
                            colaborador={colaborador}
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            email={colaborador.email}
                            imagem={colaborador.imagem}
                            aoDeletar={aoDeletar} 
                            aoFavoritar={aoFavoritar}
                        />
                    );
                })}
            </div>    
        </section>
    )
}
export default Times;