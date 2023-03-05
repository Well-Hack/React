

const CarList = (brand, km, color) => {
  return (
    <div>
        <div>
        <h2>Detalhes do Carro</h2>
        <ul>
            <li>Marca do Carro: {brand}</li>
            <li>Kilometragem rodada: {km}</li>
            <li>Cor do carro: {color}</li>
        </ul>
    </div>


    </div>
  )
}

export default CarList