//return the total number of smiling faces in the array
function countSmileys(arr) {
    return arr.reduce((a, b) => {
        if (/(:|;)(-|~)?(\)|D)/g.test(b)) return a + 1;
        return a;
    }, 0);
}

console.log(countSmileys([]));
console.log(countSmileys([':D', ':~)', ';~D', ':)']));
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));
console.log(countSmileys([':-)', ';~D', ':-D', ':_D']));
