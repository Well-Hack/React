import './Myforms.css';

import {useState} from 'react'

const Forms = ({user}) => {
    //3 - gerenciamnto de dados

    //6 Controlled inputs 
    const[name, setName] = useState(user ? user.name : '');
    const [email, setEmail] = useState(user ? user.email : '')

    const handleName = (e) => {
        setName(e.target.value);
    };
      //console.log(name);
      //console.log(email);

      const handleSubmit = (event) => {   
            event.preventDefault();
            console.log('Enviando os Dados');
            console.log(name, email);
      // 7  Limapr formulario
          setName('');
          setEmail('')
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
                <input type="text" name='name' id='name' placeholder= 'Digite o seu nome'onChange={(e) => setName(e.target.value)} value={name}/></label>
            </div>
          <label>
            <span>E-mail</span>
            <input type='email' name='email' placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)} value={email}/>
           </label>
            <input type="submit" value='Enviar' />
      </form>

    </div>
  )
}

export default Forms