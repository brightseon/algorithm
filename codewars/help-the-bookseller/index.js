function stockList(listOfArt, listOfCat) {
    if (listOfArt.length === 0 || listOfCat.length === 0) return '';
    const list = listOfArt.reduce((a, b) => {
        const idx = listOfCat.indexOf(b.charAt(0));
        if (idx === -1) return a;

        a[idx] = (a[idx] || 0) + +b.split(' ')[1];
        return a;
    }, []);

    return listOfCat.map((a, i) => `(${a} : ${list[i] || 0})`).join(' - ');
}

console.log(stockList(['ABAR 200', 'CDXE 500', 'BKWR 250', 'BTSQ 890', 'DRTY 600'], ['A', 'B']));
console.log(
    stockList(['CBART 20', 'CDXEF 50', 'BKWRK 25', 'BTSQZ 89', 'DRTYM 60'], ['A', 'B', 'C', 'W'])
);
console.log(stockList([], ['B', 'R', 'D', 'X']));
