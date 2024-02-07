function scrollingText(text) {
    return [...text].map(
        (t, i) => `${text.slice(i).toUpperCase()}${text.slice(0, i).toUpperCase()}`
    );
}

console.log(scrollingText('abc'));
