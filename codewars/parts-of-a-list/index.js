function partlist(arr) {
    return Array(arr.length - 1)
        .fill(0)
        .map((a, i) => [arr.slice(0, i + 1).join(' '), arr.slice(i + 1).join(' ')]);
}

console.log(partlist(['I', 'wish', 'I', "hadn't", 'come']));
console.log(partlist(['cdIw', 'tzIy', 'xDu', 'rThG']));
console.log(partlist(['vJQ', 'anj', 'mQDq', 'sOZ']));
