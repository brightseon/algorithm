function compose(num) {
    return (op) => (op ? op(num) : num);
}

const zero = compose(0);
const one = compose(1);
const two = compose(2);
const three = compose(3);
const four = compose(4);
const five = compose(5);
const six = compose(6);
const seven = compose(7);
const eight = compose(8);
const nine = compose(9);

function plus(b) {
    return (a) => a + b;
}
function minus(b) {
    return (a) => a - b;
}
function times(b) {
    return (a) => a * b;
}
function dividedBy(b) {
    return (a) => Math.floor(a / b);
}

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(six(dividedBy(two())));
