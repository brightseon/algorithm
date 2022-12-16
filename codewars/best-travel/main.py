from itertools import combinations


def choose_best_sum(t, k, ls):
    if len(ls) < k:
        return None

    arr = [sum(a)
           for a in list(filter(lambda l: t >= sum(l), combinations(ls, k)))]
    if len(arr) == 0:
        return None

    return max(arr)


print(choose_best_sum(230, 4, [100, 76, 56, 44, 89, 73,
      68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]))
print(choose_best_sum(430, 5, [100, 76, 56, 44, 89, 73,
      68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]))
print(choose_best_sum(430, 8, [100, 76, 56, 44, 89, 73,
      68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89]))
