import './App.css';
import girl from "./assets/girl.jpg";
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData.';
import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessage from './components/ChangeMessage';
import UsersDetails from './components/UsersDetails';

function App() {
  const [userName2] = useState ("Luana");

    function showMessage(){
      console.log('Evento de componente pai')
    }
  
    const [message, setMessage] = useState("");

    const handleMessage = (msg) =>{
      setMessage(msg);
    }

    const users = [
      {id: 1, name: 'Wellerson', job: 'Programador', age: 26},
      {id: 2, name: 'Carlos', job: 'Policial', age:22},
      {id: 3, name: 'Luana', job: 'Estudante', age:15},
    ];

  return (
  <div>
    <h1>Seção 3: Avançando no react</h1>
    {/*Imagem em public */}
    <img src="farol.jpg" alt="farol" />
      <div>
      {/*Imagens em assets*/}
      <img src={girl} alt="garota" />
     </div>
     <ManageData/>
     <div><ListRender/></div>
     <div><CondicionalRender/></div>
     {/*Props*/}
     <div><ShowUserName name={userName2}/></div>
     {/*Destruturing*/}
     <CarDetails brand='vw' km={1000} color='Azul' neww={true}/>
    {/*Reaproveitamento*/}
    <CarDetails brand='Ford' color = 'Vermelho' km={0} neww={true}/>
    <CarDetails brand='Chevrolet' color = 'Cinza' km={0} neww={false}/>
    {/*Loop de array de objetos*/}
    {cars.map((car) =>(
      <CarDetails 
      key={car.id}
      brand={car.brand} color={car.color} km = {car.km} neww={car.neww}/>
    ))}
    <Fragments propFragments='Teste'/>
    {/*Children prop*/}
    <Container myValue='Testando'>
      <p>E este é o conteúdo</p>
    </Container>
    <ExecuteFunction myFunction={showMessage}/>
    {/*State lift*/}
    <Message msg={message}/>
    <ChangeMessage handleMessage={handleMessage}/>
    {/*Desafio*/}
    {users.map((user) => {
      <UsersDetails
      key={user.id}
      name={user.name}
      job={user.job}
      age={user.age}  
      />
    })}
  </div>  
  );
}

export default App;
