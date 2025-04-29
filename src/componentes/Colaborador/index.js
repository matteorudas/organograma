import { MdDelete, MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import './Colaborador.css';

const Colaborador= ({colaborador, nome, imagem, cargo, email, corFundo, aoDeletar, aoFavoritar}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
            <MdDelete 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h6>{email}</h6>
                <div className='favorito'>
                    {colaborador.favorito 
                    ? <MdOutlineStar {...propsfavorito} color='#f9f209' /> 
                    : <MdOutlineStarBorder {...propsfavorito}/>
                    }
                </div>
            </div>
        </div>
    )
}
export default Colaborador;