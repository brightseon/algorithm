function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1;

    const a1Leng = a1.map((a) => a.length);
    const a2Leng = a2.map((a) => a.length);

    return Math.max(
        ...[Math.max(...a1Leng) - Math.min(...a2Leng), Math.max(...a2Leng) - Math.min(...a1Leng)]
    );
}

var s1 = [
    'hoqq',
    'bbllkw',
    'oox',
    'ejjuyyy',
    'plmiis',
    'xxxzgpsssa',
    'xxwwkktt',
    'znnnnfqknaz',
    'qqquuhii',
    'dvvvwz'
];
var s2 = ['cccooommaaqqoxii', 'gggqaffhhh', 'tttoowwwmmww'];
console.log(mxdiflg(s1, s2));
