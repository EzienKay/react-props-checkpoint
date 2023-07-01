import Player from "./Player";
import Players from "./Players";

const PlayerList = () => {
    const playerList = Players.map(pList => {
        return(
        <Player 
        key = {pList.id}
        name= {pList.name}   
        team= {pList.team}
        nationality= {pList.nationality}
        jerseyNumber= {pList.jerseyNumber}
        age= {pList.age}
        image= {pList.image}
        />
        )
      });
      return (
        <div style={{display: 'flex'}}>
         {playerList}
        </div>
      );
}

export default PlayerList