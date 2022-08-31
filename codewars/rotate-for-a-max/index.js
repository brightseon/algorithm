function maxRot(n) {
    return Math.max(
        ...`${n}`
            .split('')
            .reduce(
                (a, b, i) => [
                    ...a,
                    [
                        `${a[a.length - 1]}`.slice(0, i),
                        `${a[a.length - 1]}`.slice(i + 1),
                        `${a[a.length - 1]}`.slice(i, i + 1)
                    ].join('')
                ],
                [n]
            )
    );
}

console.log(maxRot(38458215));
console.log(maxRot(195881031));
console.log(maxRot(896219342));
console.log(maxRot(69418307));
console.log(maxRot(56789));
