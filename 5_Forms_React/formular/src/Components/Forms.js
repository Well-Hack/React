import './Myforms.css';

const Forms = () => {
  return (
    <div>Forms
        <h2>Formulario</h2>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name='name' placeholder= 'Digite o seu nome'/>

                <input type="submit" name="enviar" id="submit" value='enviar'/>
                <input type="reset" value='Resetar'/>
            </div>
        </form>

    </div>
  )
}

export default Forms