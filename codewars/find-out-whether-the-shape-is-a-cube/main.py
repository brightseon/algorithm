def cube_checker(volume, side):
    if volume <= 0: return False

    return volume == (side * side * side)


print(cube_checker(-12,2))
print(cube_checker(8, 3))
print(cube_checker(8, 2))
print(cube_checker(-8,-2))
print(cube_checker(0, 0))
print(cube_checker(27, 3))
print(cube_checker(1, 5))
print(cube_checker(125, 5),True)
print(cube_checker(125,-5),False)
print(cube_checker(0, 12))
print(cube_checker(12, -1),False)
print(cube_checker(1, 1))