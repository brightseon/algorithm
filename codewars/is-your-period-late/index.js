function periodIsLate(last, today, cycleLength) {
    return (today.getTime() - last.getTime()) / (24 * 60 * 60 * 1000) > cycleLength;
}

console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28));
