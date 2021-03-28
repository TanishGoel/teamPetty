
import './homePageStyle.css';
import amongus from './images/amongus.png';
import * as React from 'react';
import StartSession from './session';
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';

function App() {


  return (
    <div className="App">
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
            <div>
            <Router>
              <NavLink to="/session" className="btn btn-primary"><b>Let's Play!</b></NavLink>

              <Switch>
                <Route exact path="/session" component={StartSession} />
              </Switch>
              </Router>
         </div>
          </form>
          
        </div>
        
      </div>
      </div>
  );
}

export default App;
