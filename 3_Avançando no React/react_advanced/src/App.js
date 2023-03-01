import './App.css';
import girl from "./assets/girl.jpg";
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData.';
import ShowUserName from './components/ShowUserName';
import { useState } from "react";
import CarDetails from './components/CarDetails';

function App() {
  const name ='Tomas';
  const [userName2] = useState ("Luana");
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
  </div>  
  );
}

export default App;
