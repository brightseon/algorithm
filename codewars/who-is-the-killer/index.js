function killer(suspectInfo, dead) {
    for (const suspect in suspectInfo) {
        if (dead.every((d) => suspectInfo[suspect].includes(d))) return suspect;
    }
}

console.log(
    killer(
        {
            James: ['Jacob', 'Bill', 'Lucas'],
            Johnny: ['David', 'Kyle', 'Lucas'],
            Peter: ['Lucy', 'Kyle']
        },
        ['Lucas', 'Bill']
    )
);
console.log(killer({ Brad: [], Megan: ['Ben', 'Kevin'], Finn: [] }, ['Ben']));
