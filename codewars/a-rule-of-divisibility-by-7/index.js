function seven(m) {
    let num = m,
        step = 0;

    while (`${num}`.length > 2) {
        ++step;
        const leng = `${num}`.length;
        const x = +`${num}`.slice(0, leng - 1);
        const y = +`${num}`.slice(leng - 1);

        num = x - 2 * y;
    }

    return [num, step];
}

console.log(seven(1021));
console.log(seven(1603));
console.log(seven(371));
console.log(seven(483));
console.log(seven(477557101));
