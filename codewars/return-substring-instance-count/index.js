function solution(fullText, searchText) {
    return fullText.split(searchText).length - 1;
}

console.log(solution('abcdeb', 'b'));
console.log(solution('abc', 'b'));
console.log(solution('abbc', 'bb'));
