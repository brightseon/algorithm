function modifyMultiply(str, loc, num) {
    return Array(num).fill(str.split(' ')[loc]).join('-');
}

console.log(modifyMultiply('This is a string', 3, 5));
console.log(
    modifyMultiply(
        "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
        8,
        10
    )
);
console.log(
    modifyMultiply(
        'Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence',
        1,
        1
    )
);
console.log(
    modifyMultiply(
        "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",
        6,
        8
    )
);
console.log(
    modifyMultiply(
        'Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.',
        2,
        5
    )
);
