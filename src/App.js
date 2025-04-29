import React, {useState} from 'react';
import Banner from './componentes/Banner/banner';
import Formulario from './componentes/Formulario';
import Times from './componentes/Times';
import Rodape from './componentes/Rodape';
import { v4 as uuidv4 } from 'uuid';

function App() {

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

  const inicial = [
    {
      nome: 'Matteo Rudas',
      cargo: 'Desenvolvedor Front-end',
      email: 'matteorudas@gamil.com',
      imagem: 'https://media.licdn.com/dms/image/v2/C4D03AQEOEaSy8ryt1A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1605806331320?e=1751500800&v=beta&t=SuUBZOFOABiWe49xbGVRn04X62NPKA6R4zbHhBQmtUc',
      time: times[0].nome,
      favorito: false,
      id: uuidv4()
    },
    {
      nome: 'Julian Bernal',
      cargo: 'Desenvolvedora Back-end',
      email: 'jbernal@test.com',
      imagem: 'https://github.com/matteorudas.png',
      time: times[0].nome,
      favorito: false,
      id: uuidv4()
    },
    {
      nome: 'Mattias Pereira',
      cargo: 'Admnistrador',
      email: 'mpereira@test.com',
      imagem: 'https://i0.wp.com/blog.cuidamimascota.com/wp-content/uploads/2020/01/21c26-screen-shot-2018-04-16-at-4.42.32-pm.png?resize=688%2C540&ssl=1',
      time: times[4].nome,
      favorito: false,
      id: uuidv4()
    },]
  

  const [colaboradores, setColaboradores] = useState(inicial);

  const aoNovoColaAdd = (novoColaborador) => {
    setColaboradores([...colaboradores, novoColaborador]);
  }


function aoDeletarColaborador(id) {
  setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
}

function mudarCorTime(cor, id) {
  setTimes(times.map(time => {
    if(time.id === id ){
      time.cor = cor;
    }
    return time;
  }));
}

function cadastraTime({nome, cor}) {
  setTimes([...times, {nome, cor, id: uuidv4() }]);
}

function resolvarFavorito(id){
  setColaboradores(colaboradores.map(colaborador => {
    if(colaborador.id === id){
      colaborador.favorito = !colaborador.favorito;
    }
    return colaborador;
  }));

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
        aoFavoritar={resolvarFavorito}
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
