function apple(x) {
    return Math.pow(x, 2) > 1000
        ? `It's hotter than the sun!!`
        : 'Help yourself to a honeycomb Yorkie for the glovebox.';
}

console.log(apple('50'));
console.log(apple(4));
