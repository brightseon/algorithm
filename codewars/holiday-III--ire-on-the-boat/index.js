function fireFight(s) {
    return s.replace(/Fire/g, '~~');
}

console.log(
    fireFight(
        'Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast'
    )
);
console.log(fireFight('Mast Deck Engine Water Fire'));
console.log(
    fireFight('Fire Deck Engine Sail Deck Fire Fire Fire Rudder Fire Boat Fire Fire Captain')
);
