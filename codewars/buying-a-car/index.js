function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let oldPrice = startPriceOld,
        newPrice = startPriceNew,
        percent = percentLossByMonth,
        month = 0;

    while (oldPrice + savingperMonth * month - newPrice < 0) {
        month++;
        if (month % 2 === 0) percent += 0.5;

        const p = 1 - percent / 100;
        oldPrice *= p;
        newPrice *= p;
    }

    return [month, Math.round(savingperMonth * month + oldPrice - newPrice)];
}

console.log(nbMonths(2000, 8000, 1000, 1.5));
console.log(nbMonths(12000, 8000, 1000, 1.5));
console.log(nbMonths(1300, 3600, 1000, 1.5));
