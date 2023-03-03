import './App.css';
import MyComponents from './components/MyComponents';

function App() {
  return (
    <div className="App">
      {/*CSS global */}
      <h1>React com CSS</h1>
      {/*CSS components */}
      <MyComponents/>
      <p>Este paragrafo é do App.js {'\n'}</p>
      {/*Inline Css*/}
      <p style={{backgroundcolor: 'black',}}>
        Este elemento foi estilizado de forma inline (dentro da tag)</p>
    </div>
  );
}

export default App;
