const WEEK = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

function solution(a, b) {
    return WEEK[new Date(2016, a - 1, b).getDay()];
}

console.log(solution(5, 24));
