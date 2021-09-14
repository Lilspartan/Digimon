import { GameState } from '../interfaces'

type Props = {
    amount: number;
    gameState: GameState;
}

const MemoryLink = ({ amount, gameState }: Props) => {
    const spendMemory = async () => {
        var data = await fetch(`https://streaming.gabirmotors.com/memory/spend/${amount}`)
    }

    var color;
    if (amount <= Math.abs(Number(gameState.memory))) {
        color = gameState.colors[gameState[gameState.turn].color]
    } else {
        color = gameState.colors[gameState[(gameState.turn === "player1" ? 'player2' : 'player1')].color]
    }

    var styles = {
        "--color": color
    } as any

    return (
        <a className="memory-btn" onClick = {spendMemory} style = {styles}>
            -{amount}
        </a>
    )
}

export default MemoryLink
