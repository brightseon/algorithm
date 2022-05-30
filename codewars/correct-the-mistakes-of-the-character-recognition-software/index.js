function correct(string) {
    return string.replace(/5/g, 'S').replace(/1/g, 'I').replace(/0/g, 'O');
}

console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('51NGAP0RE'));
console.log(correct('BUDAPE5T'));
console.log(correct('PAR15'));
