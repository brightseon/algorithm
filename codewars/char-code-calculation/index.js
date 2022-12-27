const add = (arr) => arr.reduce((a, b) => a + +b, 0);

function calc(x) {
    const [total1, total2] = x
        .split('')
        .map((x) => x.charCodeAt(0))
        .reduce(
            (a, b) => {
                a[0] = a[0] + +add(`${b}`.split(''));
                a[1] = a[1] + +add(`${b}`.replace(/7/g, 1).split(''));

                return a;
            },
            [0, 0]
        );

    return total1 - total2;
}

console.log(calc('abcdef'));
console.log(calc('ifkhchlhfd'));
console.log(calc('aaaaaddddr'));
console.log(calc('jfmgklf8hglbe'));
console.log(calc('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'));
