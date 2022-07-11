function array(arr) {
    const splits = arr.split(',');
    if (splits.length < 3) return null;

    return splits.slice(1, splits.length - 1).join(' ');
}

console.log(array('1,2,3'));
console.log(array('1,2,3,4'));
console.log(array('1,2,3,4,5'));
console.log(array(''));
console.log(array('1'));
console.log(array('1,2'));
console.log(array('2'));
