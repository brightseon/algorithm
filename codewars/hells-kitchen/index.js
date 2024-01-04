function gordon(a) {
    return a
        .split(' ')
        .map(
            (s) =>
                `${s
                    .toUpperCase()
                    .replace(/a/gi, '@')
                    .replace(/i|o|u|e/gi, '*')}!!!!`
        )
        .join(' ');
}

console.log(gordon('What feck damn cake'));
console.log(gordon('are you stu pid'));
console.log(gordon('i am a chef'));
