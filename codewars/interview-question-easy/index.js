function getStrings(city) {
    return [...new Set(city.replace(/[^a-z]/gi, '').toLowerCase())]
        .map((c) => `${c}:${'*'.repeat([...city.matchAll(new RegExp(c, 'gi'))].length)}`)
        .join(',');
}

console.log(getStrings('Chicago'));
console.log(getStrings('Bangkok'));
console.log(getStrings('Las Vegas'));
