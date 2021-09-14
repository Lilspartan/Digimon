import React, {useState, useContext, useEffect} from 'react';
import {SocketContext} from '../context/socket';
import Circle from '../Components/Circle';
import '../index.css';
import { withRouter, useParams } from 'react-router-dom';
import MemoryLink from '../Components/MemoryLink';
import { GameState } from '../interfaces';
import Menu from '../icons/Menu';

type Props = {
    location: any
}

const Client = (props: Props) => {
    const socket = useContext(SocketContext);
    const player = props.location?.pathname.substring(1);
    const [showMenu, setShowMenu] = useState(false);
    const [menuSide, setMenuSide] = useState<"right" | "left">("right");
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

    var items: JSX.Element[] = [];
    for (var i = -10; i <= 10; i ++) {
      items.push((
        <>
            <Circle gameState = {gameState} number = {`${Math.abs(i)}`} selected = {(String(i) === gameState.memory)} fill = {[gameState.colors[gameState.player1.color], gameState.colors[gameState.player2.color]]} side = {(i < 0 ? 'left' : 'right')} />
        </>
      ))
    }

    var memoryButtons:JSX.Element[] = [];
    for (var i = 1; i <= 10 + Math.abs(Number(gameState.memory)); i ++) {
        memoryButtons.push((
            <MemoryLink amount = {i} gameState = {gameState} />
        ))
    }
  
    useEffect(() => {
        socket.on("game_data", (data: GameState) => {
            if (gameState !== data) {
                //console.log(data)
                setgameState(data)
            }
        }); 
        var items:JSX.Element[] = [];
        for (var i = -10; i <= 10; i ++) {
            items.push((
                <div className = "circle">
                    <Circle gameState = {gameState} number = {`${Math.abs(i)}`} selected = {(String(i) === gameState.memory)} fill = {[gameState.colors[gameState.player1.color], gameState.colors[gameState.player2.color]]} side = {(i < 0 ? 'left' : 'right')} />
                </div>
            ))
        }
        
        var memoryButtons:JSX.Element[] = [];
        for (var i = 1; i <= 10 + Math.abs(Number(gameState.memory)); i ++) {
            memoryButtons.push((
                <a className="memory-btn">
                    -{i}
                </a>
            ))
        }
        //console.log(items)
    }, [gameState])

    var mainStyles = {
        "--direction": (menuSide === "right" ? 'row' : 'row-reverse') 
    } as any

    var menuStyles = {
        "--right": (menuSide === "right" ? '0' : 'h'),
        "--left": (menuSide === "right" ? 'h' : '0') 
    } as any

    return (
      <div id = "Client-Main" style = {mainStyles}>
        <div id = "gauge-body">
            {items}
        </div>
        <div id = "side-body" style = {menuStyles}>
            <div id = "turn-section">
                {gameState.turn === player ? (
                    <>
                        <h1 onClick = {() => {
                            setShowMenu(!showMenu)
                        }}>It's Your Turn</h1>
                    </>
                ) : (
                    <>
                        <h1 onClick = {() => {
                            setShowMenu(!showMenu)
                        }}>It's {gameState[gameState.turn].name}'s Turn</h1>
                    </>
                )}
            </div>

            <div id="buttons">
                {
                    showMenu && <GameButtons menuSide = {menuSide} setMenuSide = {setMenuSide} player = {player} gameState = {gameState} />
                }
                {gameState.turn === player && (
                    <>
                        
                        {memoryButtons}
                    </>
                )}
            </div>
        </div>
      </div>
    )
}

type Props2 = {
    gameState: GameState;
    player: "player1" | "player2";
    setMenuSide: Function;
    menuSide: "right" | "left"
}

const GameButtons = ({ gameState, player, setMenuSide, menuSide }:Props2) => {
    const Pass = async () => {
        var data = await fetch(`https://streaming.gabirmotors.com/memory/set/${(gameState.turn === "player2" ? '-' : '')}3`)
    }

    const Reset = async () => {
        var data = await fetch(`https://streaming.gabirmotors.com/memory/reset`)
    }

    const Undo = async () => {
        var data = await fetch(`https://streaming.gabirmotors.com/undo`)
    }

    const Color = async (e: any) => {
        var data = await fetch(`https://streaming.gabirmotors.com/memory/color/${player}/${e.target.value}`)
    }

    var style = {
        "--chosenColor": `${(gameState.colors[gameState[player].color])}`
    } as any;

    return (
        <div id = "game-buttons">
            { gameState.turn === player && (
                <a id = "pass-button" onClick = {Pass}>
                    Pass
                </a>
            )}
            {
                gameState.memoryHistory.length ? (
                    <a id = "undo-button" onClick = {Undo}>
                        Undo
                    </a>
                ) : (
                    ''
                )
            }
            <select id="Colors" style = {style} onChange = {Color}>
                {Object.keys(gameState.colors).map(color => (
                    <>
                        <option selected = {(gameState[player].color === color)} value={color}>{color}</option>
                    </>
                ))}
            </select>
            <a id = "swap-button" onClick = {() => {
                setMenuSide((menuSide === "right" ? 'left' : 'right'))
            }}>
                Swap Sides
            </a>
            <a id = "reset-button" onClick = {Reset}>
                Reset game
            </a>
        </div>
    )
}

export default withRouter(Client)
