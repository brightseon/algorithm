function vertMirror(strng) {
    return strng
        .split('\n')
        .map((s) => s.split('').reverse().join(''))
        .join('\n');
}

function horMirror(strng) {
    return strng.split('\n').reverse().join('\n');
}

function oper(fct, s) {
    return fct(s);
}

console.log(oper(vertMirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'));
console.log(oper(vertMirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx'));
console.log(oper(horMirror, 'lVHt\nJVhv\nCSbg\nyeCt'));
console.log(oper(horMirror, 'njMK\ndbrZ\nLPKo\ncEYz'));
