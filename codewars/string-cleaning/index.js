function stringClean(s) {
    return s.replace(/\d/g, '');
}

console.log(stringClean(''));
console.log(stringClean('! !'));
console.log(stringClean('123456789'));
console.log(stringClean('(E3at m2e2!!)'));
console.log(stringClean('Dsa32 cdsc34232 csa!!! 1I 4Am cool!'));
console.log(stringClean('A1 A1! AAA   3J4K5L@!!!'));
console.log(stringClean('Adgre2321 A1sad! A2A3A4 fv3fdv3J544K5L@'));
console.log(stringClean('Ad2dsad3ds21 A  1$$s122ad! A2A3Ae24 f44K5L@222222 '));
console.log(stringClean('33333Ad2dsad3ds21 A3333  1$$s122a!d! A2!A!3Ae$24 f2##222 '));
console.log(stringClean('My "me3ssy" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?'));
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"));
