import React from 'react'

const UsersDetails = ({name, age, job}) => {
  return (
    <div><h2>User Details</h2>
    <h4>{name}</h4>
    <p>idade: {age}</p>
    <p>Profissão: {job}</p>
    {age >= 18 ? (<p>Pode tirar a CNH</p>) : (<p>Menor de idade</p>)}
    </div>
 )
}

export default UsersDetails
