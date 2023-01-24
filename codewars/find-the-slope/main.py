def find_slope(points):
    x1, x2 = points[0::2]
    y1, y2 = points[1::2]

    if x1 == x2:
        return "undefined"

    return str(int((y1 - y2) / (x1 - x2)))


print(find_slope([19, 3, 20, 3]))
print(find_slope([-7, 2, -7, 4]))
print(find_slope([10, 50, 30, 150]))
print(find_slope([10, 20, 20, 80]))
print(find_slope([-10, 6, -10, 3]))
