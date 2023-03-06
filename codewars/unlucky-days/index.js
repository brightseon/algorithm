function unluckyDays(year) {
    return Array(12)
        .fill(0)
        .filter((m, i) => new Date(year, m + i, 13).getDay() === 5).length;
}

console.log(unluckyDays(1586));
console.log(unluckyDays(1001));
console.log(unluckyDays(2819));
console.log(unluckyDays(2792));
console.log(unluckyDays(2723));
console.log(unluckyDays(1909));
console.log(unluckyDays(1812));
console.log(unluckyDays(1618));
console.log(unluckyDays(2132));
console.log(unluckyDays(2065));
