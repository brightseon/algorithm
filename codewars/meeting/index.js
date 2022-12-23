function meeting(s) {
    return s
        .toUpperCase()
        .replace(/(\w+)(:)(\w+)/g, '($3, $1)')
        .split(';')
        .sort()
        .join('');
}

console.log(
    meeting(
        'Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill'
    )
);
console.log(
    meeting(
        'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
    )
);
console.log(
    meeting(
        'John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell'
    )
);
console.log(
    meeting(
        'Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern'
    )
);
