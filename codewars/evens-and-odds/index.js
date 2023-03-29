function evensAndOdds(num) {
    return num.toString(num % 2 === 0 ? 2 : 16);
}

console.log(evensAndOdds(2));
console.log(evensAndOdds(13));
console.log(evensAndOdds(47));
console.log(evensAndOdds(0));
console.log(evensAndOdds(12800));
console.log(evensAndOdds(8172381723));
