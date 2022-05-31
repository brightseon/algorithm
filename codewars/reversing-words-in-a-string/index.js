function reverse(string) {
    return string.split(' ').reverse().join(' ');
}

console.log(reverse('I am an expert at this'));
console.log(reverse('This is so easy'));
console.log(reverse('no one cares'));
console.log(reverse(''));
console.log(reverse('CodeWars'));
