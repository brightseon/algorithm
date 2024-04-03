function findOddNames(list) {
    return list.filter((l) => {
        return l.firstName.split('').reduce((a, b) => a + b.charCodeAt(0), 0) % 2 !== 0;
    });
}

const list1 = [
    {
        firstName: 'Aba',
        lastName: 'N.',
        country: 'Ghana',
        continent: 'Africa',
        age: 21,
        language: 'Python',
    },
    {
        firstName: 'Abb',
        lastName: 'O.',
        country: 'Israel',
        continent: 'Asia',
        age: 39,
        language: 'Java',
    },
];
const list2 = [
    {
        firstName: 'Aba',
        lastName: 'N.',
        country: 'Ghana',
        continent: 'Africa',
        age: 21,
        language: 'Python',
    },
];

console.log(findOddNames(list1));
console.log(findOddNames(list2));
