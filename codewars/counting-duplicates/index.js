function duplicateCount(text) {
    let str = text,
        count = 0;
    while (str.length > 0) {
        const prev = str.length;
        str = str.replace(new RegExp(str.slice(0, 1), 'gi'), '');
        const current = str.length;

        if (prev - 1 === current) continue;
        ++count;
    }

    return count;
}

// ----------------------------------------------------------------------------------------
// function duplicateCount2(text) {
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

console.log(duplicateCount(''));
console.log(duplicateCount('abcd'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('Indivisibility'));
console.log(duplicateCount('Indivisibilities'));
