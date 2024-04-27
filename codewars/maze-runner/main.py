def maze_runner(maze, directions):
    DIRECTION = {
        'N': [0, -1],
        'E': [1, 0],
        'W': [-1, 0],
        'S': [0, 1]
    }

    dx = 0
    dy = 0

    for y, m in enumerate(maze):
        for x, key in enumerate(m):
            if key == 2:
                dx = x
                dy = y
                break

    print(dx, dy)

    for d in directions:
        dx += DIRECTION[d][0]
        dy += DIRECTION[d][1]

        if dy < 0 or dx < 0 or dy >= len(maze) or dx >= len(maze[0]) or maze[dy][dx] == 1:
            return 'Dead'
        if maze[dy][dx] == 3:
            return 'Finish'

    return 'Lost'


maze = [[1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 3],
        [1, 0, 1, 0, 1, 0, 1],
        [0, 0, 1, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 1],
        [1, 2, 1, 0, 1, 0, 1]]

print(maze_runner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]))
print(maze_runner(maze, ["N", "N", "N", "N", "N",
      "E", "E", "S", "S", "E", "E", "N", "N", "E"]))
print(maze_runner(maze, ["N", "N", "N", "N",
      "N", "E", "E", "E", "E", "E", "W", "W"]))

print(maze_runner(maze, ["N", "N", "N", "W", "W"]))
print(maze_runner(maze, ["N", "N", "N", "N", "N",
      "E", "E", "S", "S", "S", "S", "S", "S"]))

print(maze_runner(maze, ["N", "E", "E", "E", "E"]))
