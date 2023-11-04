function calculate(str) {
    return new Function(`return ${str.replace(/plus/g, '+').replace(/minus/g, '-')}`)().toString();
}

console.log(calculate('1plus2plus3plus4'));
console.log(calculate('1minus2minus3minus4'));
console.log(calculate('1plus2plus3minus4'));
