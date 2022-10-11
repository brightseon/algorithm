function howMuchILoveYou(nbPetals) {
    switch (nbPetals % 6) {
        case 1:
            return 'I love you';
        case 2:
            return 'a little';
        case 3:
            return 'a lot';
        case 4:
            return 'passionately';
        case 5:
            return 'madly';
        default:
            return 'not at all';
    }
}

console.log(howMuchILoveYou(7));
console.log(howMuchILoveYou(3));
console.log(howMuchILoveYou(6));
