function bump(x) {
    if (x.replace(/_/g, '').length <= 15) return 'Woohoo!';

    return 'Car Dead';
}

console.log(bump('n'));
console.log(bump('__nn_nnnn__n_n___n____nn__nnn'));
console.log(bump('nnn_n__n_n___nnnnn___n__nnn__'));
console.log(bump('_nnnnnnn_n__n______nn__nn_nnn'));
console.log(bump('______n___n_'));
