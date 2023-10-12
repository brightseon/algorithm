function consonantCount(str) {
    return str.replace(/[^bcdfghjklmnpqrstvwxyz]+/gi, '').length;
}

console.log(consonantCount(''));
console.log(consonantCount('aeiouAEIOU'));
console.log(consonantCount('aaa'));
console.log(consonantCount('bcdfghjklmnpqrstvwxyz'));
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ'));
console.log(consonantCount('y'));
console.log(consonantCount('Y'));
console.log(consonantCount('01234567890_'));
console.log(consonantCount(' ^&$#'));
console.log(
    consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')
);
