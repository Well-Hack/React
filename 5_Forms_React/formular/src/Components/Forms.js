import './Myforms.css';

const Forms = () => {
  return (
    <div>
        <h2>Formulario</h2>
        <form>
            <div>
                <label htmlFor="name" target='name'>Nome:
                <input type="text" name='name' id='name' placeholder= 'Digite o seu nome'/></label>

                <input type="submit" name="enviar" id="submit" value='enviar'/>
                <input type="reset" value='Resetar'/>
            </div>
        </form>

    </div>
  )
}

export default Forms