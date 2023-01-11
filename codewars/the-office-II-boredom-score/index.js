const SCORE = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    'pissing about': 25
};

function boredom(staff) {
    const sum = Object.values(staff).reduce((a, b) => a + SCORE[b], 0);

    if (sum >= 100) return 'party time!!';

    return sum > 80 ? 'i can handle this' : 'kill me now';
}

console.log(
    boredom({
        tim: 'change',
        jim: 'accounts',
        randy: 'canteen',
        sandy: 'change',
        andy: 'change',
        katie: 'IS',
        laura: 'change',
        saajid: 'IS',
        alex: 'trading',
        john: 'accounts',
        mr: 'finance'
    })
);
console.log(
    boredom({
        tim: 'IS',
        jim: 'finance',
        randy: 'pissing about',
        sandy: 'cleaning',
        andy: 'cleaning',
        katie: 'cleaning',
        laura: 'pissing about',
        saajid: 'regulation',
        alex: 'regulation',
        john: 'accounts',
        mr: 'canteen'
    })
);
console.log(
    boredom({
        tim: 'accounts',
        jim: 'accounts',
        randy: 'pissing about',
        sandy: 'finance',
        andy: 'change',
        katie: 'IS',
        laura: 'IS',
        saajid: 'canteen',
        alex: 'pissing about',
        john: 'retail',
        mr: 'pissing about'
    })
);
