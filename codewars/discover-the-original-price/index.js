function discoverOriginalPrice(discountedPrice, salePercentage) {
    return Math.round((discountedPrice / (1 - salePercentage / 100)) * 100) / 100;
}

console.log(discoverOriginalPrice(75, 25));
console.log(discoverOriginalPrice(25, 75));
console.log(discoverOriginalPrice(75.75, 25));
