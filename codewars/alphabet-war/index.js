const LEFT = ['s', 'b', 'p', 'w'];
const RIGHT = ['z', 'd', 'q', 'm'];

function alphabetWar(fight) {
    const { left, right } = fight.split('').reduce(
        (a, b) => {
            const l = LEFT.indexOf(b);
            if (l !== -1) return { ...a, left: a.left + (l + 1) };

            const r = RIGHT.indexOf(b);
            if (r !== -1) return { ...a, right: a.right + (r + 1) };

            return a;
        },
        { left: 0, right: 0 }
    );

    if (left > right) return 'Left side wins!';
    if (right > left) return 'Right side wins!';

    return "Let's fight again!";
}

console.log(alphabetWar('z'));
console.log(alphabetWar('zdqmwpbs'));
console.log(alphabetWar('zzzzs'));
console.log(alphabetWar('wwwwww'));
