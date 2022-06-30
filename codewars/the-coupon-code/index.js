function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) return false;
    const current = new Date(currentDate).getTime();
    const expiration = new Date(expirationDate).getTime();

    return current <= expiration;
}

console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'));
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'));
