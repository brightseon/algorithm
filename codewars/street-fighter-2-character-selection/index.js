function streetFighterSelection(fighters, position, moves) {
    let x = position[0],
        y = position[1];

    return moves.map((move) => {
        switch (move) {
            case 'up':
                x = Math.max(0, --x);
                break;
            case 'down':
                x = Math.min(fighters.length - 1, ++x);
                break;
            case 'left':
                y = --y;
                if (y < 0) y = fighters[0].length - 1;
                break;
            case 'right':
                y = ++y;
                if (y > fighters[0].length - 1) y = 0;
                break;
        }

        return fighters[x][y];
    });
}

let moves = [];
let fighters = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];

moves = ['up', 'left', 'right', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves));

moves = [];
console.log(streetFighterSelection(fighters, [0, 0], moves));

moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'];
console.log(streetFighterSelection(fighters, [0, 0], moves));

moves = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'];
console.log(streetFighterSelection(fighters, [0, 0], moves));

moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right'];
console.log(streetFighterSelection(fighters, [0, 0], moves));

moves = ['down', 'down', 'down', 'down'];
console.log(streetFighterSelection(fighters, [0, 0], moves));

moves = ['up', 'up', 'up', 'up'];
console.log(streetFighterSelection(fighters, [0, 0], moves));
