const coord = (n) => {
    if (n === 0) return [2, 4];

    const y = Math.abs(Math.ceil(n / 3));
    const x = 3 - Math.abs(y * 3 - n);

    return [x, y];
};

const distance = (a, b) => Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);

function solution(numbers, hand) {
    const handPosition = { l: [1, 4], r: [3, 4] };

    return numbers
        .reduce((a, b) => {
            const [x, y] = coord(b);
            let h = (x === 1 && 'L') || (x === 3 && 'R') || null;

            if (!h) {
                const left = distance(handPosition.l, [x, y]);
                const right = distance(handPosition.r, [x, y]);

                if (left < right) h = 'L';
                if (right < left) h = 'R';
                if (right === left) h = hand.slice(0, 1).toUpperCase();
            }

            handPosition[h.toLowerCase()] = [x, y];

            return [...a, h];
        }, [])
        .join('');
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
