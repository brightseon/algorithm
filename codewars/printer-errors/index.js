function printerError(s) {
    return `${s.replace(/[a-m]/gi, '').length}/${s.length}`;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));
