function unscrambleEggs(word) {
    return word.replace(/egg/gi, '');
}

console.log(unscrambleEggs('ceggodegge heggeregge'));
console.log(unscrambleEggs('FeggUNegg KeggATeggA'));
