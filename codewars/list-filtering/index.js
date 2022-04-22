// const filter_list = list => list.filter(l => {
//     if(!(/[0-9]/g.test(l))) return;

//     return l;
// });

const filter_list = (list) =>
    list.filter((l) => {
        if (typeof l !== 'number') return;

        return /\d/g.test(`${l}`);
    });

// ------------------------------------------------------------------------------------------
// function filter_list(l) {
//     return l.filter(function (v) { return typeof v == 'number' })
// }

// function filter_list(l) {
//     return l.filter(e => Number.isInteger(e));
// }

console.log(filter_list([1, 2, 'a', 'b']));
console.log(filter_list([1, 'a', 'b', 0, 15]));
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]));
