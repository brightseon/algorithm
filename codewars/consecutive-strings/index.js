function longestConsec(strarr, k) {
    // your code
    if (strarr.length === 0 || k < 1 || strarr.length < k) return '';

    return strarr
        .reduce((a, _, i) => {
            if (i + k > strarr.length) return a;
            return [...a, strarr.slice(i, i + k).join('')];
        }, [])
        .reduce((a, b) => {
            if (a.length >= b.length) return a;
            return b;
        }, '');
}

console.log(longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2));
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2));
console.log(
    longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1
    )
);
console.log(longestConsec([], 3));
console.log(
    longestConsec(
        ['itvayloxrp', 'wkppqsztdkmvcuwvereiupccauycnjutlv', 'vweqilsfytihvrzlaodfixoyxvyuyvgpck'],
        2
    )
);
console.log(longestConsec(['wlwsasphmxx', 'owiaxujylentrklctozmymu', 'wpgozvxxiu'], 2));
console.log(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], -2));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 15));
console.log(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 0));
