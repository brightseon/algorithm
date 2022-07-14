function checkTheBucket(bucket) {
    return bucket.indexOf('gold') !== -1;
}

console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'stone']));
console.log(checkTheBucket(['stone', 'stone', 'stone', 'stone', 'gold']));
console.log(checkTheBucket(['gold', 'stone', 'stone', 'stone', 'stone']));
console.log(checkTheBucket([]));
console.log(checkTheBucket(['stone', 'stone', 'stone', 'gold', 'gold']));
