function zero(...args) {
    if (args.length > 0) return args[0](0);
    return 0;
}
function one(...args) {
    if (args.length > 0) return args[0](1);
    return 1;
}
function two(...args) {
    if (args.length > 0) return args[0](2);
    return 2;
}
function three(...args) {
    if (args.length > 0) return args[0](3);
    return 3;
}
function four(...args) {
    if (args.length > 0) return args[0](4);
    return 4;
}
function five(...args) {
    if (args.length > 0) return args[0](5);
    return 5;
}
function six(...args) {
    if (args.length > 0) return args[0](6);
    return 6;
}
function seven(...args) {
    if (args.length > 0) return args[0](7);
    return 7;
}
function eight(...args) {
    if (args.length > 0) return args[0](8);
    return 8;
}
function nine(...args) {
    if (args.length > 0) return args[0](9);
    return 9;
}

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
