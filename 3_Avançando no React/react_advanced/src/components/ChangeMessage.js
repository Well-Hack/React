import React from 'react'

const ChangeMessage = ({handleMessage}) => {
    const messages = ['Oi', 'Olá', 'hey', 'Hi!']
    
    return (

    <div>
        <button onClick={() => handleMessage(messages[0])}>1</button>
        <button onClick={() => handleMessage(messages[0])}>2</button>
        <button onClick={() => handleMessage(messages[0])}>3</button>
        <button onClick={() => handleMessage(messages[0])}>4</button>
        </div>
  )
}

export default ChangeMessage