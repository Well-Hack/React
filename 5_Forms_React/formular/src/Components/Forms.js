import './Myforms.css';

import {useState} from 'react'

const Forms = () => {
    //3 - gerenciamnto de dados
    const[name, setName] = useState()
    const [enail, setEmail] = useState()

    const handleName = (e) => {
      console.log('mudou o nome')

    }

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
         {/*Label com input*/}
      <form>
          <label>
            <span>E-mail</span>
            <input type='email' name='email' placeholder='Digite seu E-mail'/>
           </label>
            <input type="submit" value='Enviar' />
      </form>

    </div>
  )
}

export default Forms