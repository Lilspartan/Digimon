export interface GameState {
    memory:    string;
    player1:   Player;
    player2:   Player;
    colors:    {
        Red: string;
        Yellow: string;
        Green: string;
        Blue: string;
        Purple: string;
        Black: string;
    };
    turn:      "player1" | "player2";
    memoryHistory: MemoryHistory[];
}

export interface Player {
    name:    string;
    color:   "Red" | "Yellow" | "Green" | "Blue" | "Purple" | "Black";
    side:    string;
}

export interface MemoryHistory {
    turn: string;
    memory: string;
}