function nicknameGenerator(name) {
    if (name.length < 4) {
        return 'Error: Name too short';
    }

    const end = /a|i|o|u|e/i.test(name[2]) ? 4 : 3;

    return name.slice(0, end);
}

console.log(nicknameGenerator('Jimmy'));
console.log(nicknameGenerator('Samantha'));
console.log(nicknameGenerator('Sam'));
console.log(nicknameGenerator('Kayne'));
console.log(nicknameGenerator('Melissa'));
console.log(nicknameGenerator('James'));

console.log(nicknameGenerator('Jean'));
