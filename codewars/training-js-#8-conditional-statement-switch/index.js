function howManydays(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
        case 2:
            return 28;
    }
}

console.log(howManydays(1));
console.log(howManydays(2));
console.log(howManydays(3));
console.log(howManydays(4));
console.log(howManydays(12));
