const checkExam = (array1, array2) => {
    const score = array1
        .map((a1, idx) => {
            const a2 = array2[idx];

            if (!(a1 && a2)) return 0;

            return a1 === a2 ? 4 : -1;
        })
        .reduce((a, b) => a + b, 0);

    return Math.max(score, 0);
};
// ------------------------------------------------------------------------------------------------------------------------------
// const checkExam = (x, y) => (x = y.reduce((s, e, i) => s + (e === x[i] ? 4 : e === '' ? 0 : -1), 0)) > 0 ? x : 0;

// function checkExam(array1, array2) {
//     const reducer = (a, e, idx) => {
//       if (e === "") {
//         return a;
//       }

//       if (e === array1[idx]) {
//         return a += 4;
//       }

//       return --a;
//     }
//     const score = array2.reduce(reducer, 0);
//     return score < 0 ? 0 : score;
//   }

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd']));
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b', '']));
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c']));
console.log(checkExam(['b', 'c', 'b', 'a'], ['', 'a', 'a', 'c']));
