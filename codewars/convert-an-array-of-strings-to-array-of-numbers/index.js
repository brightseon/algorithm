function toNumberArray(stringarray) {
    return stringarray.map((a) => +a);
}

console.log(toNumberArray(['1.1', '2.2', '3.3']));
