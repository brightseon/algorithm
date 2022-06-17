function solution(s) {
    if (/^[0-9]+$/.test(s)) return +s;
    const numbers = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    return +s.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/g, (str) =>
        numbers.indexOf(str)
    );
}

console.log(solution('one4seveneight'));
console.log(solution('23four5six7'));
console.log(solution('2three45sixseven'));
console.log(solution('123'));
