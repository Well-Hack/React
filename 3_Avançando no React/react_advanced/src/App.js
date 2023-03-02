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

function App() {
  const [userName2] = useState ("Luana");

  const cars = [ 
   { id: 1, brand: 'Ferrari', color: 'Vermelho', km: 0, neww: true},
   { id: 2, brand: 'Kia', color: 'Preto', km: 3, neww: false},
   { id: 3, brand: 'Mercedes', color: 'Prata', km: 58, neww: false},
   {id: 4, brand: 'Nissan', color: 'Vermelho', km: 0, neww: true},
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
      <CarDetails brand={car.brand} color={car.color} km = {car.km} neww={car.neww}/>
    ))}
    <Fragments propFragments='Teste'/>
    {/*Children prop*/}
    <Container myValue='Testando'>
      <p>E este é o conteúdo</p>
    </Container>
  </div>  
  );
}

export default App;
