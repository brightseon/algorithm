String.prototype.isUpperCase = function () {
    return this.replace(/\W/gi, '').replace(/[A-Z]/g, '').length === 0;
};

console.log('c'.isUpperCase());
console.log('C'.isUpperCase());
console.log('hello I AM DONALD'.isUpperCase());
console.log('HELLO I AM DONALD'.isUpperCase());
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase());
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase());

console.log('Hello World'.isUpperCase());
console.log('hello world'.isUpperCase());
console.log('Hello world'.isUpperCase());
console.log('hello World'.isUpperCase());
console.log('HELLO WORLD'.isUpperCase());
console.log('Bob walks his dog every day.'.isUpperCase());
console.log('BOB walks his dog every day.'.isUpperCase());
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase());
console.log('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase());
console.log('#lovewins'.isUpperCase());
console.log('#Lovewins'.isUpperCase());
console.log('#loveWins'.isUpperCase());
console.log('#LoveWins'.isUpperCase());
console.log('#LOVEWins'.isUpperCase());
console.log('#LoveWINS'.isUpperCase());
console.log('#LOVEWINs'.isUpperCase());
console.log('#lOVEWINS'.isUpperCase());
console.log('#LOVEWINS'.isUpperCase());

console.log('HELLO I AM DONALD'.isUpperCase());
console.log('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase());
