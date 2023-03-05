import './App.css';
import CarList from './components/CarList';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = false;

  const carros = [
    { id: 1, brand: 'Masserati', color: 'Azul', km: 0,},
    { id: 2, brand: 'Ferrari', color: 'Preto', km: 3,},
    { id: 3, brand: 'Aston Martin', color: 'Verde', km: 58},
    {id: 4, brand: 'Nissan', color: 'Vermelho', km: 0},
  ]

  return (
    <div className="App">
      {/*CSS global */}
      <h1>React com CSS</h1>
      {/*CSS components */}
      <MyComponents/>
      <p>Este paragrafo é do App.js {'\n'}</p>
      {/*Inline Css*/}
      <p style={{backgroundcolor: 'black', color:'white', fontsize:'32px'}}>
        Este elemento foi estilizado de forma inline (dentro da tag)</p>
      {/*Inline-dinamico Css*/}
      <h2 style={n < 10 ? ({color:'red'}) : ({color:'blue'})}>CSS dinamico</h2>
      <p>ou</p>
      <h2 style={n > 10 ? ({color:'red'}) : ({color:'blue'})}>CSS dinamico</h2>
      {/*Classe dinamica no Css*/}
      <h2 className={redTitle ? 'red-title' : 'title'}>Este titulo vai ter Classe Dinamica</h2>
      {/*CSS modulo*/}
      <Title/>{'\n'}
      <div><h1>Desafio CSS</h1>

      {carros.map((car)=>(
        <CarList
        key={car.id}
        brand={car.brand} color={car.color} km = {car.km}/>
      ))}    
      </div>


    </div>
  );
}

export default App;
