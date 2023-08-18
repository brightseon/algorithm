function validSpacing(s) {
    return /^(?!\s)\w+(\s{0,1}\w+)*(?<!\s)$/i.test(s);
}

console.log(validSpacing('Hello world'));
console.log(validSpacing(' Hello world'));
console.log(validSpacing('Hello  world '));
console.log(validSpacing('Hello'));
console.log(validSpacing('Helloworld'));
