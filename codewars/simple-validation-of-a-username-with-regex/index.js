function validateUsr(username) {
    return /^[a-z_0-9]{4,26}$/g.test(username);
}

console.log(validateUsr('asddsa'));
console.log(validateUsr('a'));
console.log(validateUsr('Hass'));
console.log(validateUsr('Hasd_12assssssasasasasasaasasasasas'));
console.log(validateUsr(''));
console.log(validateUsr('____'));
console.log(validateUsr('012'));
console.log(validateUsr('p1pp1'));
console.log(validateUsr('asd43 34'));
console.log(validateUsr('asd43_34'));
