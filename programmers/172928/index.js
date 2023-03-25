function solution(park, routes) {
    const idx = park.findIndex((p) => p.includes('S'));
    const position = [idx, park[idx].indexOf('S')];

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        const [op, num] = route.split(' ');
        const n = +num;
        const [curHeight, curWidth] = position;

        switch (op) {
            case 'W':
                if (curWidth - n < 0) break;
                if (park[curHeight].slice(curWidth - n, curWidth).includes('X')) break;

                position[1] -= n;
                break;

            case 'E':
                if (curWidth + n > park[0].length - 1) break;
                if (park[curHeight].slice(curWidth, curWidth + n + 1).includes('X')) break;

                position[1] += n;
                break;

            case 'N':
                if (curHeight - n < 0) break;
                if (
                    park
                        .slice(curHeight - n, curHeight)
                        .map((p) => p[curWidth])
                        .join('')
                        .includes('X')
                )
                    break;

                position[0] -= n;
                break;

            case 'S':
                if (curHeight + n > park.length - 1) break;
                if (
                    park
                        .slice(curHeight, curHeight + n + 1)
                        .map((p) => p[curWidth])
                        .join('')
                        .includes('X')
                )
                    break;

                position[0] += n;
                break;
        }
    }

    return position;
}

console.log(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']));
console.log(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']));
