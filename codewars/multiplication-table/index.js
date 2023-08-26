multiplicationTable = function (size) {
    const output = [];

    for (let i = 0; i < Math.pow(size, 2); i++) {
        const idx = Math.floor(i / size);

        if (!output[idx]) output[idx] = [];
        output[idx].push((idx + 1) * ((i % size) + 1));
    }

    return output;
};

console.log(multiplicationTable(3));
