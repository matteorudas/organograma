import { MdDelete } from "react-icons/md";
import './Colaborador.css';

const Colaborador= ({nome, imagem, cargo, email, corFundo, aoDeletar, id}) => {
    return (
        <div className='colaborador'>
            <MdDelete 
                size={25} 
                className='deletar' 
                onClick={() => aoDeletar(id)}
            />
            <div className='cabecalho' style={{backgroundColor: corFundo}}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h6>{email}</h6>
            </div>
        </div>
    )
}
export default Colaborador;