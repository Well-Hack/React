import {useState} from "react";

const ManageData = () => {
let SomeData = 10

console.log(SomeData);

const  [number, setNumber] = useState(15);
  return (
    <div>Valor {SomeData}.
    <button onClick={() => (SomeData = 15)}>Clique aqui </button>
    <p>valor {number}</p>
    <button onClick={() => setNumber(25)}> Mudar o userState</button>
    </div>

  )
}

export default ManageData