from re import findall


def sum_of_integers_in_string(s):
    return sum([int(n) for n in findall('\d+', s)])


print(sum_of_integers_in_string("12.4"))
print(sum_of_integers_in_string("h3ll0w0rld"))
print(sum_of_integers_in_string("2 + 3 = "))
print(sum_of_integers_in_string(
    "Our company made approximately 1 million in gross revenue last quarter."))
print(sum_of_integers_in_string("The Great Depression lasted from 1929 to 1939."))
print(sum_of_integers_in_string("Dogs are our best friends."))
print(sum_of_integers_in_string("C4t5 are 4m4z1ng."))
print(sum_of_integers_in_string(
    "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
