import * as React from 'react';
import './homePageStyle.css';
import Player from './components/Scoreboard';

function StartSession() {

  return (
  <div>
  <h2>
        SCOREBOARD
      </h2>
      <div>
              <Player name="Player 1"
              title="Fastest to die"/>

              <Player name="Player 2"
              title="Worst intuition"/>

              <Player name="Player 3"
              title="Way too good at killing"/>

              <Player name="Player 4"
              title="Task Completionist"/>

              <Player name="Player 5"             
              title="Talks too much"/>

              <Player name="Player 6"
              title="Never finishes tasks"/>

              <Player name="Player 7"
              title="Emergency button masher"/>
             
              <Player name="Player 8"
              title="Electrical victim"/>

              <Player name="Player 9"
              title="The detective"/>

              <Player name="Player 10"
              title="Absolute angel, wouldn't hurt a fly"/>
              
      </div>
      </div>
    );
  }

export default StartSession;