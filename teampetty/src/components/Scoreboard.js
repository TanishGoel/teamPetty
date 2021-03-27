import * as React from 'react';
import './Scoreboard.css';

function Player(props) {
  const [impostor, setImpostor] = React.useState(false);
  const [win, setWin] = React.useState(false);
  const [wins, setWins] = React.useState(0);
  const [impWins, setImpWins] = React.useState(0);
  const [crewWins, setCrewWins] = React.useState(0);

  const ImpostorBoxClicked = () => {
    setImpostor(!impostor);
  } 

  const WinBoxClicked = () => {
    
  }

  const Win = () => {
    setWin(!win);
    if (!win) {
      setWins(wins + 1);
      impostor ? setImpWins(impWins + 1) : setCrewWins(crewWins + 1)
    }
  }

  return (
    <div className="player">
      <div className="playerScore">
        <h2 className="name">{props.name}</h2>
        <div className="playerScore-info">
          <p><b>Total Wins: </b>{wins}</p>
          <p><b>Impostor Wins: </b>{impWins}</p>
          <p><b>Crewmate Wins: </b>{crewWins}</p>
        </div>
        <p className="title"><b>Titles: </b>{props.title}</p>
      </div>
      <div className="updates">
        <input type="checkbox" value="Impostor?" checked={impostor} onChange={ImpostorBoxClicked}/>
        <label>Impostor?</label>
      </div>
      <div>
        <input type="checkbox" value="Winner?" checked={win} onChange={Win}/>
        <label>Winner?</label>
      </div>
    </div>
  )
}

export default Player;