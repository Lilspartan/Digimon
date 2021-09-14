import React, {useState, useContext, useCallback, useEffect} from 'react';
import {SocketContext} from '../context/socket';
import Circle from '../Components/Circle'
import { GameState } from '../interfaces'

const Gauge = () => {
    const socket = useContext(SocketContext);
    const [gameState, setgameState] = useState<GameState>({
      "memory": "0",
      "turn": "player1",
      "memoryHistory": [
          {
              "turn": "player1",
              "memory": "0"
          }
      ],
      "colors": {
          "Red": "#CD0000",
          "Yellow": "#fff017",
          "Green": "#00d10a",
          "Blue": "#0096ed",
          "Purple": "#9200ed",
          "Black": "#525151"
      },
      "player1": {
          "name": "",
          "color": "Blue",
          "side": "right"
      },
      "player2": {
          "name": "",
          "color": "Red",
          "side": "left"
      }
  })

    var items:JSX.Element[] = [];
    for (var i = -10; i <= 10; i ++) {
      items.push(<Circle gameState = {gameState} number = {`${Math.abs(i)}`} selected = {(String(i) === gameState.memory)} fill = {[gameState.colors[gameState.player1.color], gameState.colors[gameState.player2.color]]} side = {(i < 0 ? 'left' : 'right')} />)
    }
  
    useEffect(() => {
        socket.on("game_data", (data: GameState) => {
            console.log(data)
            setgameState(data)
        }); 
      var items:JSX.Element[] = [];
      for (var i = -10; i <= 10; i ++) {
        items.push(<Circle gameState = {gameState} number = {`${Math.abs(i)}`} selected = {(String(i) === gameState.memory)} fill = {[gameState.colors[gameState.player1.color], gameState.colors[gameState.player2.color]]} side = {(i < 0 ? 'left' : 'right')} />)
      }
      console.log(items)
    }, [gameState])
    
    return (
      <>
        {items}
      </>
    )
}

export default Gauge
