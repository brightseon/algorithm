function mazeRunner(maze, directions) {
    const DIRECTION = {
        N: [0, -1],
        E: [1, 0],
        W: [-1, 0],
        S: [0, 1],
    };
    let position = [0, 0];

    for (let y = 0; y < maze.length; y++) {
        const x = maze[y].indexOf(2);

        if (x > -1) {
            position = [x, y];
            break;
        }
    }

    for (let i = 0; i < directions.length; i++) {
        position[0] += DIRECTION[directions[i]][0];
        position[1] += DIRECTION[directions[i]][1];

        if (
            position[0] < 0 ||
            position[1] < 0 ||
            position[0] >= maze[0].length ||
            position[1] >= maze.length
        )
            return 'Dead';
        if (maze[position[1]][position[0]] === 1) return 'Dead';
        if (maze[position[1]][position[0]] === 3) return 'Finish';
    }

    return 'Lost';
}

const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
];

console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E']));
console.log(
    mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])
);
console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W']));

console.log(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W']));
console.log(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S']));

console.log(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E']));
