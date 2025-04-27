import React, {useState} from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [colaboradores, setColaboradores] = useState([]);
  const aoNovoColaAdd = (novoColaborador) => {
    setColaboradores([...colaboradores, novoColaborador]);
  }

  const [times, setTimes] = useState ([
    {
    nome:'Desenvolvimento' ,
    cor:'#82CFFA',
    id: uuidv4()
    },
    {
    nome:'Marketing' ,
    cor:'#A6D157',
    id: uuidv4()
    },
    {
    nome:'Comercial' ,
    cor:'#E06B69',
    id: uuidv4()
    },
    {
    nome:'Financeiro' ,
    cor:'#D86EBF',
    id: uuidv4()
    },
    {
    nome:'Administrativo' ,
    cor:'#FEBA05',
    id: uuidv4() 
    }
])

function aoDeletarColaborador(id) {
  setColaboradores(colaboradores.filter(colaborador => colaborador.nome !== id));
}

function mudarCorTime(cor, id) {
  setTimes(times.map(time => {
    if(time.id === id ){
      time.cor = cor;
    }
    return time;
  }));
}

function cadastraTime(novoTime) {
  setTimes([...times, { ...novoTime, id: uuidv4() }]);
}

  return (
    <div className="App">
      <Banner/>
      <Formulario 
        time={times.map(time => time.nome)} 
        aoColaboradorCdtr={novoColaborador => aoNovoColaAdd(novoColaborador)}
        cadastraTime={cadastraTime}  
      />
      {times.map(time=> <Times
        mudarCor={mudarCorTime}
        key={time.nome}
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={aoDeletarColaborador}
        time={time}
      />)}
      <Rodape/>
    </div>
  );
}

export default App;
