direction = {'W': [0, -1], 'N': [-1, 0], 'E': [0, 1], 'S': [1, 0]}


def solution(park, routes):
    idx = [idx for idx, p in enumerate(park) if 'S' in list(p)][0]
    [y, x] = [idx, park[idx].index('S')]

    for route in routes:
        [op, num] = route.split(' ')
        n = int(num)
        d = direction[op]
        change_y = y + d[0] * n
        change_x = x + d[1] * n

        if (change_y < 0 or change_y > len(park) - 1) or (change_x < 0 or change_x > len(park[0]) - 1):
            continue

        if y == change_y and 'X' in list(park[y][min(x, change_x):max(x, change_x) + 1]):
            continue

        if x == change_x and 'X' in list(''.join(list(map(lambda s: s[x], park)))[min(y, change_y):max(y, change_y) + 1]):
            continue

        x = change_x
        y = change_y

    return [y, x]


print(solution(['SOO', 'OOO', 'OOO'], ['E 2', 'S 2', 'W 1']))
print(solution(['SOO', 'OXX', 'OOO'], ['E 2', 'S 2', 'W 1']))
print(solution(['OSO', 'OOO', 'OXO', 'OOO'], ['E 2', 'S 3', 'W 1']))
