import { useState } from "react";


const CondicionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Marcos")
  return (
    <div> 
        <h1>Isso será exibido?</h1>
        {x && <p>se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}

        <div> <h4>if ternario</h4>
        {name === "João" ? (
            <div><p>O nome é João</p></div>
        ) : (
            <div>O nome não é encontrado</div>
        )}
        <button onClick={() => setName("João")}>Clique Aqui</button>            
        </div>
    </div>
  );
};

export default CondicionalRender