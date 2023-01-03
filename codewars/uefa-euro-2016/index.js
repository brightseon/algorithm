function uefaEuro2016(teams, scores) {
    let str = `At match ${teams[0]} - ${teams[1]},`;

    if (scores[0] === scores[1]) return `${str} teams played draw.`;

    return `At match ${teams[0]} - ${teams[1]}, ${teams[scores[0] > scores[1] ? 0 : 1]} won!`;
}

console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));
console.log(uefaEuro2016(['Belgium', 'Italy'], [0, 2]));
console.log(uefaEuro2016(['Portugal', 'Iceland'], [1, 1]));
