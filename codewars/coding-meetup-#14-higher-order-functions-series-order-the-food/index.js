function orderFood(list) {
    return list.reduce((a, b) => {
        const meal = b.meal;

        if (!a[meal]) a[meal] = 0;

        a[meal] += 1;

        return a;
    }, {});
}

console.log(
    orderFood([
        {
            firstName: 'Noah',
            lastName: 'M.',
            country: 'Switzerland',
            continent: 'Europe',
            age: 19,
            language: 'C',
            meal: 'vegetarian'
        },
        {
            firstName: 'Anna',
            lastName: 'R.',
            country: 'Liechtenstein',
            continent: 'Europe',
            age: 52,
            language: 'JavaScript',
            meal: 'standard'
        },
        {
            firstName: 'Ramona',
            lastName: 'R.',
            country: 'Paraguay',
            continent: 'Americas',
            age: 29,
            language: 'Ruby',
            meal: 'vegan'
        },
        {
            firstName: 'George',
            lastName: 'B.',
            country: 'England',
            continent: 'Europe',
            age: 81,
            language: 'C',
            meal: 'vegetarian'
        }
    ])
);
