function potatoes(p0, w0, p1) {
    return Math.floor((w0 * (100 - p0)) / (100 - p1));
}

console.log(potatoes(82, 127, 80));
console.log(potatoes(93, 129, 91));
