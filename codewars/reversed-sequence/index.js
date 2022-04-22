const reverseSeq = (n) => {
    let numbers = [];

    for (let i = n; 0 < i; i--) {
        numbers.push(i);
    }

    return numbers;
};

// ------------------------------------
// 주의 : Array.from는 느리다.
// const reverseSeq = length => Array.from({length}, () => length--)

console.log(reverseSeq(5));
