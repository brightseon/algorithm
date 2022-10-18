function solution(phone_number) {
    return phone_number.replace(/.(?=[0-9]{4})/g, '*');
}

console.log(solution('01033334444'));
console.log(solution('027778888'));
