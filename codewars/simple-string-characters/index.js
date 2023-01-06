const checkLength = (s) => (reg) => s.match(reg)?.length || 0;

function solve(s) {
    const check = checkLength(s);

    return [/[A-Z]/g, /[a-z]/g, /\d/g, /[^A-Za-z0-9]/g].map((reg) => check(reg));
}

console.log(solve(''));
console.log(solve('aAbBcC'));
console.log(solve('Codewars@codewars123.com'));
console.log(solve('bgA5<1d-tOwUZTS8yQ'));
console.log(solve('P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H'));
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"));
console.log(solve('$Cnl)Sr<7bBW-&qLHI!mY41ODe'));
console.log(solve('@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft'));
