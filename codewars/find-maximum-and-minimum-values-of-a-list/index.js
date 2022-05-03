var min = function (list) {
    list.sort((a, b) => a - b);
    return list[0];
};

var max = function (list) {
    list.sort((a, b) => b - a);
    return list[0];
};

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([42, 54, 65, 87, 0]));
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]));
console.log(max([5]));
