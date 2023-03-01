import './App.css';
import girl from "./assets/girl.jpg";
import CondicionalRender from './components/CondicionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData.';

function App() {
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
  </div>  
  );
}

export default App;
