function dashatize(num) {
    return `${num}`
        .replace(/[13579]/g, '-$&-')
        .replace(/--/g, '-')
        .replace(/^-|-$/g, '');
}

console.log(dashatize(274));
console.log(dashatize(5311));
console.log(dashatize(86320));
console.log(dashatize(974302));

console.log(dashatize(0));
console.log(dashatize(-1));
console.log(dashatize(-28369));
