function solve(s) {
    return Math.max(
        ...s
            .replace(/[^aeiou]+/g, ' ')
            .split(' ')
            .map((s) => s.length)
    );
}

console.log(solve('codewarriors'));
console.log(solve('suoidea'));
console.log(solve('ultrarevolutionariees'));
console.log(solve('strengthlessnesses'));
console.log(solve('cuboideonavicuare'));
console.log(solve('chrononhotonthuooaos'));
console.log(solve('iiihoovaeaaaoougjyaw'));
