import React from 'react';
import './homePageStyle.css'
import amongus from './amongus.png'
import {Link} from 'react'

function App() {
    return (
      <div>
        <title>Rankings Among Us</title>
        <link rel="stylesheet" href="homePageStyle.css" />
        <div className="logo">
          <img src={amongus} className="icon" />
          <br />
          <h1>Enter Players: </h1>
          <form id="playerName" style={{textAlign: 'center'}}>
            <input type="text" name id="player1" placeholder="Player 1" required />
            <input type="text" name id="player2" placeholder="Player 2" required />
            <input type="text" name id="player3" placeholder="Player 3" required />
            <input type="text" name id="player4" placeholder="Player 4" required />
            <input type="text" name id="player5" placeholder="Player 5" />
            <input type="text" name id="player6" placeholder="Player 6" />
            <input type="text" name id="player7" placeholder="Player 7" />
            <input type="text" name id="player8" placeholder="Player 8" />
            <input type="text" name id="player9" placeholder="Player 9" />
            <input type="text" name id="player10" placeholder="Player 10" />
            <br /><br />
            <Link to="/" className="btn btn-primary">Sign up</Link>
          </form>
        </div>
      </div>
    );
  }
export default App;
