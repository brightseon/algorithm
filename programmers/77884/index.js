function solution(left, right) {
    return Array(right - left + 1)
        .fill(left)
        .reduce((acc, cur, idx) => {
            const length =
                cur + idx === 1
                    ? 1
                    : 2 +
                      Array(Math.floor(Math.sqrt(cur + idx)))
                          .fill(1)
                          .reduce((a, b, i) => {
                              if ((cur + idx) % (b + i) !== 0) return a;
                              if (Math.sqrt(cur + idx) === b + i) return a + 1;

                              return a + 2;
                          }, 0);

            return length % 2 === 0 ? acc + (cur + idx) : acc - (cur + idx);
        }, 0);
}

console.log(solution(13, 17));
console.log(solution(24, 27));
