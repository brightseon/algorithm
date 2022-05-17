function areYouPlayingBanjo(name) {
    return `${name} ${/^r/gi.test(name) ? 'plays banjo' : 'does not play banjo'}`;
}

console.log(areYouPlayingBanjo('Adam'));
console.log(areYouPlayingBanjo('Paul'));
console.log(areYouPlayingBanjo('Ringo'));
console.log(areYouPlayingBanjo('bravo'));
console.log(areYouPlayingBanjo('rolf'));
