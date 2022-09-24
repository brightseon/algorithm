function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    return {
        isWorthIt: () => draft - crew * 1.5 > 20
    };
}

console.log(new Ship(0, 0).isWorthIt());
console.log(new Ship(15, 20).isWorthIt());
