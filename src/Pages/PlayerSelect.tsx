import React, {useState, useContext, useCallback, useEffect} from 'react';
import {SocketContext} from '../context/socket';
import { Link } from 'react-router-dom';

type GameState = {
    memory:    string;
    turn:      "player1" | "player2";
    player1:   Player;
    player2:   Player;
}

type Player = {
    name:    string;
    color:   string;
    side:    string;
}

const PlayerSelect = () => {
    const socket = useContext(SocketContext);
    const [gameState, setgameState] = useState<GameState>({
        "memory": "0",
        "turn": "player1",
        "player1": {
            "name": "",
            "color": "#000000",
            "side": "right"
        },
        "player2": {
            "name": "",
            "color": "#000000",
            "side": "left"
        }
    })

    useEffect(() => {
        socket.on("game_data", (data: GameState) => {
            if (gameState !== data) {
                //console.log(data)
                setgameState(data)
            }
        }); 
    }, [gameState])

    return (
        <>
            <div id = "player-selection">
                Which Player Are You?<br />
                <div id = "players">
                <div id="player1" className = "playerSelect">
                    <a className = "link" href = {`/player1`}>
                        {gameState.player1.name}
                    </a>
                </div>
                <div id="player2" className = "playerSelect">
                    <a className = "link" href = {`/player2`}>
                        {gameState.player2.name}
                    </a>
                </div>
                </div>
            </div>
        </>
    )
}

export default PlayerSelect
