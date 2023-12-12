function menFromBoys(arr) {
    return [
        ...new Set(
            arr
                .sort((a, b) => b - a)
                .reduce((a, b) => {
                    if (b % 2 === 0) {
                        a.unshift(b);
                    } else {
                        a.push(b);
                    }

                    return a;
                }, [])
        )
    ];
}

console.log(menFromBoys([7, 3, 14, 17]));
console.log(menFromBoys([2, 43, 95, 90, 37]));
console.log(menFromBoys([20, 33, 50, 34, 43, 46]));
console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]));
console.log(menFromBoys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]));
console.log(menFromBoys([-32, -39, -35, -41]));
console.log(menFromBoys([-64, -71, -63, -66, -65]));
console.log(menFromBoys([-94, -99, -100, -99, -96, -99]));
console.log(menFromBoys([-53, -26, -53, -27, -49, -51, -14]));
console.log(menFromBoys([-17, -45, -15, -33, -85, -56, -86, -30]));
console.log(menFromBoys([12, 89, -38, -78]));
console.log(menFromBoys([2, -43, 95, -90, 37]));
console.log(menFromBoys([82, -61, -87, -12, 21, 1]));
console.log(menFromBoys([63, -57, 76, -85, 88, 2, -28]));
console.log(menFromBoys([49, 818, -282, 900, 928, 281, -282, -1]));
