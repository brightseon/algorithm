function chain(input, fs) {
    if (fs.length === 0) return input;

    return chain(fs[0](input), fs.slice(1));
}

function add(x) {
    return x + 10;
}

function mult(x) {
    return x * 30;
}

console.log(chain(2, [add, mult]));
