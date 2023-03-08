import './Myforms.css';

import {useState} from 'react'

const Forms = () => {
    //3 - gerenciamnto de dados
    const[name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        setName(e.target.value);
    };
      //console.log(name);
      //console.log(email);

      const handleSubmit = (event) => {   
            event.preventDefault();
            console.log('Enviando os Dados');
            console.log(name, email)
          };

  return (
      <div>
        <h2>Formulario</h2>
        <form>
            <div>
                <label htmlFor="name">Nome:
                <input type="text" name='name' id='name' placeholder= 'Digite o seu nome' onChange={handleName}/></label>

                <input type="submit" name="enviar" id="submit" value='enviar'/>
                <input type="reset" value='Resetar'/>
            </div>
        </form>
         {/*Label com input e simplificação de manip. de state*/}
        <form>
          <label>
            <span>E-mail</span>
            <input type='email' name='email' placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)}/>
           </label>
            <input type="submit" value='Enviar' />
      </form>
      {/*Envio de Form */}
      <form onSubmit={handleSubmit}>
      <div>
                <label htmlFor="name">Nome:
                <input type="text" name='name' id='name' placeholder= 'Digite o seu nome'onChange={(e) => setName(e.target.value)}/></label>
            </div>
          <label>
            <span>E-mail</span>
            <input type='email' name='email' placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)}/>
           </label>
            <input type="submit" value='Enviar' />
      </form>

    </div>
  )
}

export default Forms