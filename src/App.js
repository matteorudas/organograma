import React, {useState} from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';
import Rodape from './componentes/Rodape';

function App() {

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaAdd = (novoColaborador) => {
    setColaboradores([...colaboradores, novoColaborador]);
  }

  const times = [
    {
     nome:'Desenvolvimento' ,
     corPrimaria:'#82CFFA',
     corSecundaria:'#E8F8FF',
    },
    {
      nome:'Marketing' ,
      corPrimaria:'#A6D157' ,
      corSecundaria:'#F0F8E2',
     },{
     nome:'Comercial' ,
     corPrimaria:'#E06B69',
     corSecundaria:'#FDE7E8',
    },
    {
      nome:'Financeiro' ,
      corPrimaria:'#D86EBF',
      corSecundaria:'#FAE5F5',
     },
     {
      nome:'Administrativo' ,
      corPrimaria:'#FEBA05' ,
      corSecundaria:'#FFF5D9',
     }
]

  return (
    <div className="App">
      <Banner/>
      <Formulario time={times.map(time => time.nome)} aoColaboradorCdtr={novoColaborador => aoNovoColaAdd(novoColaborador)}/>
      {times.map(time=> <Times 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
