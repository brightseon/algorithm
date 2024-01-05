function countLettersAndDigits(input) {
    return input.replace(/[\W_-]/gi, '').length;
}

console.log(countLettersAndDigits('hel2!lo'));
console.log(countLettersAndDigits('n!!_ice!!123'));
console.log(countLettersAndDigits('1'));
console.log(countLettersAndDigits('?'));
console.log(countLettersAndDigits('12345f%%%t5t&/6'));
console.log(countLettersAndDigits('aBcDeFg090'));
console.log(countLettersAndDigits('u_n_d_e_r__S_C_O_R_E'));
