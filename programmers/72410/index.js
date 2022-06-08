function solution(new_id) {
    return new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/\.+/g, '.')
        .replace(/^\.|\.$/g, '')
        .replace(/^$/g, 'a')
        .slice(0, 15)
        .replace(/\.$/g, '')
        .replace(/^.{0,2}$/, (str) => str.padEnd(3, str.charAt(str.length - 1)));
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));
