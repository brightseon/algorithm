function Sleigh() {}

Sleigh.prototype.authenticate = function (name, password) {
    if (name !== 'Santa Claus') return false;
    if (password !== 'Ho Ho Ho!') return false;

    return true;
};

const sleigh = new Sleigh();
console.log(sleigh.authenticate('Santa Claus', 'Ho Ho Ho!'));
console.log(sleigh.authenticate('Santa', 'Ho Ho Ho!'));
console.log(sleigh.authenticate('Santa Claus', 'Ho Ho!'));
console.log(sleigh.authenticate('jhoffner', 'CodeWars'));
