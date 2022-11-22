var SequenceSum = (function () {
    function SequenceSum() {}

    SequenceSum.showSequence = function (count) {
        if (count === 0) return '0=0';
        if (count < 0) return `${count}<0`;

        return Array(count)
            .fill(0)
            .reduce(
                (a, _, i) => {
                    a[0] = `${a[0]}+${i + 1}`;
                    a[1] = a[1] + i + 1;

                    return a;
                },
                ['0', 0]
            )
            .join(' = ');
    };

    return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));
