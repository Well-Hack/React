const CarList = ({brand, km, color}) => {
  return (
    <div>
        <div className='card'>
            <p>Marca do Carro: {brand}</p>
            <p>Kilometragem rodada: {km}</p>
            <p>Cor do carro: {color}</p>
        </div>
    </div>
  )
}

export default CarList