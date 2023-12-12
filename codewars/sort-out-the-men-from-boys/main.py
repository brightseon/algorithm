def men_from_boys(arr):
  even = sorted(filter(lambda a: a % 2 == 0, set(arr)))
  odd = sorted(filter(lambda a: a % 2 != 0, set(arr)), reverse=True)

  return even + odd


print(men_from_boys([7, 3, 14, 17]))
print(men_from_boys([2, 43, 95, 90, 37]))
print(men_from_boys([20, 33, 50, 34, 43, 46]))
print(men_from_boys([82, 91, 72, 76, 76, 100, 85]))
print(men_from_boys([2, 15, 17, 15, 2, 10, 10, 17, 1, 1]))
print(men_from_boys([-32, -39, -35, -41]))
print(men_from_boys([-64, -71, -63, -66, -65]))
print(men_from_boys([-94, -99, -100, -99, -96, -99]))
print(men_from_boys([-53, -26, -53, -27, -49, -51, -14]))
print(men_from_boys([-17, -45, -15, -33, -85, -56, -86, -30]))
print(men_from_boys([12, 89, -38, -78]))
print(men_from_boys([2, -43, 95, -90, 37]))
print(men_from_boys([82, -61, -87, -12, 21, 1]))
print(men_from_boys([63, -57, 76, -85, 88, 2, -28]))
print(men_from_boys([49, 818, -282, 900, 928, 281, -282, -1]))
