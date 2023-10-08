def search_names(logins):
    return list(filter(lambda x: x[0].find('_') >= 0, logins))


print(search_names([["foo", "foo@foo.com"], ["bar_", "bar@bar.com"]]))
print(search_names([["foobar_", "foo@foo.com"], ["bar_", "bar@bar.com"]]))
print(search_names([["foo", "foo@foo.com"], ["bar", "bar@bar.com"]]))
