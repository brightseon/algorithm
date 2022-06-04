function solution(id_list, report, k) {
    return [...new Set(report)]
        .reduce((a, b) => {
            const splitStr = b.split(' ');
            const idx = id_list.indexOf(splitStr[1]);
            a[idx] = [...a[idx], splitStr[0]];

            return a;
        }, [...id_list].fill([]))
        .reduce((a, b) => {
            if (b.length < k) return a;

            b.forEach((s) => {
                const idx = id_list.indexOf(s);
                a[idx] = a[idx] + 1;
            });

            return a;
        }, [...id_list].fill(0));
}

console.log(
    solution(
        ['muzi', 'frodo', 'apeach', 'neo'],
        ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
        2
    )
);
console.log(solution(['con', 'ryan'], ['ryan con', 'ryan con', 'ryan con', 'ryan con'], 3));
