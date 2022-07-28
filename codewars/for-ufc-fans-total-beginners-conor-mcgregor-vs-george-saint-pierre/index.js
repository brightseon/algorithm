var quote = function (fighter) {
    if (/george saint pierre/i.test(fighter)) return 'I am not impressed by your performance.';

    return `I'd like to take this chance to apologize.. To absolutely NOBODY!`;
};

console.log(quote('george saint pierre'));
console.log(quote('conor mcgregor'));

console.log(quote('George Saint Pierre'));
console.log(quote('Conor McGregor'));
