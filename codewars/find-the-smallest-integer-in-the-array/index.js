class SmallestIntegerFinder {
    findSmallestInt(args) {
        return args.sort((a, b) => a - b)[0];
    }
}

// ----------------------------------------------
// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args);
//     }
// }

const sif = new SmallestIntegerFinder();

console.log(sif.findSmallestInt([78, 56, 232, 12, 8]));
console.log(sif.findSmallestInt([34, 15, 88, 2]));
console.log(sif.findSmallestInt([34, -345, -1, 100]));
