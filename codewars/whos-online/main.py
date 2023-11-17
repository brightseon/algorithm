from functools import reduce


def classification(acc, cur):
    print(cur)
    key = 'offline'

    if cur['status'] == 'online':
        key = 'online'

        if cur['last_activity'] > 10:
            key = 'away'

    if key not in acc:
        acc[key] = []

    acc[key].append(cur['username'])

    return acc


def who_is_online(friends):
    return reduce(classification, friends, {})


print(who_is_online([{"username": "David", "status": "online", "last_activity": 10}, {"username": "Lucy",
      "status": "offline", "last_activity": 22}, {"username": "Bob", "status": "online", "last_activity": 104}]))
print(who_is_online([{"username": "Lucy", "status": "offline", "last_activity": 22},
                     {"username": "Bob", "status": "online", "last_activity": 104}]))
print(who_is_online([{"username": "David", "status": "online", "last_activity": 10}, {"username": "Lucy",
      "status": "offline", "last_activity": 22}, {"username": "Bob", "status": "online", "last_activity": 104}]))
print(who_is_online([{"username": "Lucy", "status": "offline", "last_activity": 22}, {
      "username": "Bob", "status": "online", "last_activity": 104}]))
print(who_is_online([{"username": "David", "status": "online", "last_activity": 10}, {"username": "Lucy", "status": "online", "last_activity": 0}, {"username": "Bob",
      "status": "online", "last_activity": 3}, {"username": "Julie", "status": "offline", "last_activity": 104}, {"username": "Lenny", "status": "online", "last_activity": 38}]))
print(who_is_online([{"username": "David", "status": "online", "last_activity": 10}, {"username": "Lucy", "status": "online", "last_activity": 0}, {"username": "Bob", "status": "offline", "last_activity": 104}, {"username": "Julie", "status": "online", "last_activity": 3}, {"username": "Lenny", "status": "online", "last_activity": 38}, {"username": "Charlie",
      "status": "online", "last_activity": 34}, {"username": "Jemma", "status": "offline", "last_activity": 2}, {"username": "Tom", "status": "online", "last_activity": 11}, {"username": "Tommy", "status": "online", "last_activity": 9}, {"username": "Jonny", "status": "online", "last_activity": 4}, {"username": "Natalie", "status": "offline", "last_activity": 97}]))
print(who_is_online([]))
