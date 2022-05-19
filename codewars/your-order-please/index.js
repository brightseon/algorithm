function order(words) {
    if (!words) return words;

    return words
        .split(' ')
        .reduce((a, b) => {
            a[+b.replace(/\D/gi, '') - 1] = b;
            return a;
        }, [])
        .join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
console.log(order(' is2 Thi1s T4est 3a'));
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));
console.log(order(''));
console.log(order('B4ob 1Jamila I3gor Ali2ce'));
