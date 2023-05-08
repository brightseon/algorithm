function add(n) {
    return (n2) => {
        return n + n2;
    };
}

console.log(add(1)(3));
