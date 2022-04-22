// console.log(/wens$/g.test(['n','n','n','s','n','s','a', 'b', ''].join('')));

function isValidWalk(walk) {
    if (walk.length !== 10 || /wens$/g.test(walk.join(''))) return false;
    const direction = {
        n: 1,
        s: -1,
        w: -1,
        e: 1
    };

    return (
        walk
            .reduce(
                (a, b) => {
                    switch (b) {
                        case 'n':
                        case 's':
                            return [a[0], a[1] + direction[b]];
                        case 'e':
                        case 'w':
                            return [a[0] + direction[b], a[1]];
                    }
                },
                [0, 0]
            )
            .reduce((a, b) => a + Math.abs(b), 0) === 0
    );
}

// ---------------------

// function isValidWalk(walk) {
//     var dx = 0
//     var dy = 0
//     var dt = walk.length

//     for (var i = 0; i < walk.length; i++) {
//         switch (walk[i]) {
//             case 'n': dy--; break
//             case 's': dy++; break
//             case 'w': dx--; break
//             case 'e': dx++; break
//         }
//     }

//     return dt === 10 && dx === 0 && dy === 0
// }

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));
console.log(isValidWalk(['w']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
