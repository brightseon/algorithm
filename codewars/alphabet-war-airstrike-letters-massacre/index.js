function alphabetWar(fight) {
    const LEFT = { w: 4, p: 3, b: 2, s: 1 };
    const RIGHT = { m: 4, q: 3, d: 2, z: 1 };
    const letters = fight.replace(/\w?\*\w?/g, (str) => ''.repeat(str.length));
    const { left, right } = [...letters].reduce(
        (a, b) => {
            if (LEFT[b]) a.left += LEFT[b];
            if (RIGHT[b]) a.right += RIGHT[b];

            return a;
        },
        { left: 0, right: 0 }
    );

    if (left === right) return `Let's fight again!`;

    return `${left > right ? 'Left' : 'Right'} side wins!`;
}

console.log(alphabetWar('z'));
console.log(alphabetWar('****'));
console.log(alphabetWar('z*dq*mw*pb*s'));
console.log(alphabetWar('zdqmwpbs'));
console.log(alphabetWar('zz*zzs'));
console.log(alphabetWar('sz**z**zs'));
console.log(alphabetWar('z*z*z*zs'));
console.log(alphabetWar('*wwwwww*z*'));
