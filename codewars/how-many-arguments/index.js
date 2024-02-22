const args_count = (...args) => {
    return args.length;
};

console.log(args_count(1, 2));
console.log(args_count());
console.log(args_count('A', 'B', 'C'));
console.log(args_count(['foo', 'bar']));
