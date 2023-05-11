var paintLetterboxes = function (start, end) {
    const leng = end - start + 1;

    return Array(leng)
        .fill(start)
        .reduce((a, b, i) => {
            `${b + i}`.split('').forEach((s) => (a[s] += 1));

            return a;
        }, Array(10).fill(0));
};

console.log(paintLetterboxes(125, 132));
