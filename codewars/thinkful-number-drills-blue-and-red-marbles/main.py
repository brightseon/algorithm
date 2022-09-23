def guess_blue(blue_start, red_start, blue_pulled, red_pulled):
    return (blue_start - blue_pulled) / ((blue_start - blue_pulled) + (red_start - red_pulled))

print(guess_blue(5, 5, 2, 3))
print(guess_blue(5, 7, 4, 3))
print(guess_blue(12, 18, 4, 6))