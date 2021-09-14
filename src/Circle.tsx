import React, { useRef, useEffect } from 'react'
import { GameState } from './interfaces'

type Props = {
    number:    string;
    side:      string;
    fill:      string[];
    selected:  boolean;
    gameState: GameState;
}

const Circle = ({ number, side, fill, selected, gameState}: Props) => {
    const updateMemory = async (url: string) => {
        var data = await fetch(url);
    }

    const fieldRef = React.useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        setTimeout(() => {
            if (selected) {
                fieldRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });
            }
        }, 300)
    }, [selected])

    return (
        <>
            <a ref={fieldRef} onClick = {() => { updateMemory(`https://streaming.gabirmotors.com/memory/set/${(side === "left" ? '-' : '')}${number}`) }}>
                {(number !== "0") ? (
                    <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style = {{ opacity: `${(selected ? '1' : '0.5')}` }}>
                        <circle id = "background" cx="100" cy="100" r="97.5" fill={(side === 'left' ? fill[0] : fill[1])} stroke={(selected ? 'white' : 'black')} stroke-width={(selected ? '10px' : '5px')}/>
                        <text 
                            x="50%" 
                            y="52%" 
                            dominant-baseline="middle" 
                            text-anchor="middle" 
                            fill = "white" 
                            style = {{ 
                                fontFamily: "'Staatliches', cursive", 
                                fontSize: '100px'
                            }}
                        >{ number }</text>
                    </svg>
                ) : (
                    <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" style = {{ opacity: `${(selected ? '1' : '0.5')}` }}>
                        <circle id = "background" cx="100" cy="100" r="97.5" fill={gameState.colors[gameState[gameState.turn].color]} stroke={(selected ? 'white' : 'black')} stroke-width={(selected ? '10px' : '5px')}/>
                        <text 
                            x="50%" 
                            y="52%" 
                            dominant-baseline="middle" 
                            text-anchor="middle" 
                            fill = "white" 
                            style = {{ 
                                fontFamily: "'Staatliches', cursive", 
                                fontSize: '100px'
                            }}
                        >{ number }</text>
                    </svg>
                )}
            </a>
        </>
    )
}

export default Circle

