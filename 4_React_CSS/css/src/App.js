import './App.css';
import MyComponents from './components/MyComponents';
import Title from './components/Title';

function App() {
  const n = 15;
  const redTitle = false;
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
      <Title/>
    </div>
  );
}

export default App;
