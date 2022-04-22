function countSheeps(arrayOfSheep) {
    return arrayOfSheep.filter((a) => a).length;
}

const array1 = [
    true,
    true,
    true,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    true,
    false,
    true,
    false,
    false,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    true
];

console.log(countSheeps(array1));
