def move_x(x, move, max_len):
    if move != 'up' and move != 'down':
        return x
    if move == 'up':
        return max(0, x - 1)

    return min(max_len, x + 1)


def move_y(y, move, max_len):
    if move != 'left' and move != 'right':
        return y
    if move == 'left':
        return max_len if y == 0 else y - 1

    return 0 if y == max_len else y + 1


def street_fighter_selection(fighters, initial_position, moves):
    arr = []
    x = initial_position[0]
    y = initial_position[1]

    for move in moves:
        x = move_x(x, move, len(fighters) - 1)
        y = move_y(y, move, len(fighters[0]) - 1)
        arr.append(fighters[x][y])

    return arr


fighters = [
    ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
    ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
]

moves = ['up', 'left', 'right', 'left', 'left']
print(street_fighter_selection(fighters, (0, 0), moves))

moves = []
print(street_fighter_selection(fighters, (0, 0), moves))

moves = ["left"]*8
print(street_fighter_selection(fighters, (0, 0), moves))

moves = ["right"]*8
print(street_fighter_selection(fighters, (0, 0), moves))

moves = ["up"]*4
print(street_fighter_selection(fighters, (0, 0), moves))

moves = ["down"]*4
print(street_fighter_selection(fighters, (0, 0), moves))

moves = ["down", "right", "up", "left"]*2
print(street_fighter_selection(fighters, (0, 0), moves))

moves = ["up", "left", "down", "right"]*2
print(street_fighter_selection(fighters, (0, 0), moves))
