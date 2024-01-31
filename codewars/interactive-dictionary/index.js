class Dictionary {
    constructor() {
        this.dictionary = {};
    }

    newEntry(key, value) {
        this.dictionary[key] = value;
    }

    look(key) {
        const value = this.dictionary[key];

        if (!value) return `Can't find entry for ${key}`;

        return value;
    }
}

const d = new Dictionary();
d.newEntry('Apple', 'A fruit that grows on trees');

console.log(d.look('Apple'));
console.log(d.look('Banana'));

d.newEntry('Apple', 'A fruit');
console.log(d.look('Apple'));

d.newEntry('Soccer', 'A sport');
console.log(d.look('Soccer'));

d.look('Hi');
d.look('Ball');

d.newEntry('soccer', 'a sport');
console.log(d.look('soccer'));
