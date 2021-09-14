import React, {useState, useContext, useCallback, useEffect} from 'react';
import {SocketContext} from '../context/socket';
import Pass from './Pass'
import { GameState } from '../interfaces'

const PlayerSelect = () => {
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
            <Pass gameState = {gameState} />
        </>
    )
}

export default PlayerSelect
