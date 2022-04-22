const RPS = {
    scissors: ['paper', 'scissors', 'rock'],
    paper: ['rock', 'paper', 'scissors'],
    rock: ['scissors', 'rock', 'paper']
};

const rps = (p1, p2) => {
    const arr = RPS[p1];
    const p1Idx = arr.indexOf(p1);
    const p2Idx = arr.indexOf(p2);

    if (p1Idx === p2Idx) return 'Draw!';
    if (p1Idx > p2Idx) return 'Player 1 won!';
    if (p1Idx < p2Idx) return 'Player 2 won!';
};

// -------------------------------------------------------------------------
// const rps = (p1, p2) => {
//     if (p1 === p2) return 'Draw!';
//     var rules = { rock: 'scissors', paper: 'rock', scissors: 'paper' };
//     if (p2 === rules[p1]) {
//         return 'Player 1 won!';
//     }
//     else {
//         return 'Player 2 won!';
//     }
// };

console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('paper', 'paper'));
