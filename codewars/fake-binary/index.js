function fakeBin(x) {
    return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}

console.log(fakeBin('45385593107843568'));
console.log(fakeBin('509321967506747'));
console.log(fakeBin('366058562030849490134388085'));
