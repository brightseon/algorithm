function save(sizes, hd) {
    let hdSize = hd;

    for (let i = 0; i < sizes.length; i++) {
        hdSize -= sizes[i];

        if (hdSize > 0) continue;
        if (hdSize < 0) return i;

        return i + 1;
    }

    return sizes.length;
}

console.log(save([4, 4, 4, 3, 3], 12));
console.log(save([4, 4, 4, 3, 3], 11));
console.log(save([4, 8, 15, 16, 23, 42], 108));
console.log(save([13], 13));
console.log(save([1, 2, 3, 4], 250));
console.log(save([100], 500));
console.log(save([11, 13, 15, 17, 19], 8));
console.log(save([45], 12));
