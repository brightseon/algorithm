/*
  function:- stantonMeasure
  input:- integer array
  output:- stanton measure of the array
*/
function stantonMeasure(input) {
    const stanton = input.filter((i) => i === 1).length;

    return input.filter((i) => i === stanton).length;
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2]));
