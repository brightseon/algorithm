function dirReduc(arr) {
    const DIR = { NORTH: 'SOUTH', SOUTH: 'NORTH', EAST: 'WEST', WEST: 'EAST' };

    return arr.reduce((a, b) => {
        if (a[a.length - 1] === DIR[b]) return a.slice(0, -1);

        return [...a, b];
    }, []);
}

console.log(dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST']));
console.log(dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST']));
