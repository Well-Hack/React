import "./Game.css";

const Game = ({verifyLetter}) => {
  return (
    <div className = "game">
      <p className= "points">
        <span>Pontuação: 000</span>
      </p>
      <h3 className="tip">
        Dica sobre a palabra: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="Letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p> Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar!</button>
        </form>
      </div>
    </div>
  )
}

export default Game