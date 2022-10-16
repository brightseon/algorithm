function solution(num) {
    let number = num,
        count = 0;

    while (count < 500) {
        if (number === 1) return count;
        if (number % 2 === 0) {
            number = number / 2;
        } else {
            number = number * 3 + 1;
        }

        count++;
    }

    return -1;
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
console.log(solution(1));
