function flyBy(lamps, drone) {
    const idx = drone.indexOf('T') + 1;

    return lamps.replace(new RegExp(`x{0,${idx}}`), 'o'.repeat(Math.min(lamps.length, idx)));
}

console.log(flyBy('xxxxxx', '====T'));
console.log(flyBy('xxxxxxxxx', '==T'));
console.log(flyBy('xxxxxxxxxxxxxxx', '=========T'));
