function towerBuilder(nFloors) {
    const max = nFloors * 2 - 1;
    return new Array(nFloors).fill('').reduce((a, _, i) => {
        const leng = i * 2 + 1;
        const space = (max - leng) / 2;
        return [...a, `${' '.repeat(space)}${'*'.repeat(leng)}${' '.repeat(space)}`];
    }, []);
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));
