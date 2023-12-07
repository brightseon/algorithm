function findScreenHeight(width, ratio) {
    const [w, h] = ratio.split(':');

    return `${width}x${(width * h) / w}`;
}

console.log(findScreenHeight(1024, '4:3'));
console.log(findScreenHeight(1280, '16:9'));
console.log(findScreenHeight(3840, '32:9'));
