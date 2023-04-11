from math import ceil


def split_in_parts(s, part_length):
    return ' '.join([s[i * part_length:i * part_length + part_length] for i in range(0, ceil(len(s) / part_length))])


print(split_in_parts("supercalifragilisticexpialidocious", 3))
print(split_in_parts("HelloKata", 1))
print(split_in_parts("HelloKata", 9))
