const whosOnline = (friends) => {
    return friends.reduce((a, b) => {
        let key = 'offline';

        if (b.status === 'online') key = b.lastActivity > 10 ? 'away' : 'online';
        if (!a[key]) a[key] = [];

        a[key].push(b.username);

        return a;
    }, {});
};

console.log(
    whosOnline([
        {
            username: 'David',
            status: 'online',
            lastActivity: 10
        },
        {
            username: 'Lucy',
            status: 'offline',
            lastActivity: 22
        },
        {
            username: 'Bob',
            status: 'online',
            lastActivity: 104
        }
    ])
);
console.log(
    whosOnline([
        [
            { username: 'Lucy', status: 'offline', lastActivity: 22 },
            { username: 'Bob', status: 'online', lastActivity: 104 }
        ]
    ])
);
