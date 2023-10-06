from collections import Counter


def check_three_and_two(array):
    counter_values = Counter(array).values()

    if all(x in counter_values for x in [3, 2]):
        return True

    return False


print(check_three_and_two(["a", "a", "a", "b", "b"]))
print(check_three_and_two(["a", "c", "a", "c", "b"]))
print(check_three_and_two(["a", "a", "a", "a", "a"]))
