function searchNames(logins) {
    return logins.filter((login) => /.+_$/g.test(login[0]));
}

console.log(
    searchNames([
        ['foo', 'foo@foo.com'],
        ['bar_', 'bar@bar.com']
    ])
);
