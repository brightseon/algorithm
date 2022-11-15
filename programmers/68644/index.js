function solution(numbers) {
    return Array(numbers.length - 1)
        .fill(1)
        .reduce((acc, cur, i) => {
            return [
                ...acc,
                ...numbers
                    .slice(cur + i)
                    .reduce(
                        (a, b) =>
                            acc.indexOf(numbers[i] + b) === -1 && a.indexOf(numbers[i] + b) === -1
                                ? [...a, numbers[i] + b]
                                : a,
                        []
                    )
            ];
        }, [])
        .sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
console.log(solution([5, 0, 2, 7]));
