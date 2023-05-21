def words_to_marks(s):
    CHARACTERS = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ]

    return sum([CHARACTERS.index(s) + 1 for s in s])


print(words_to_marks('attitude'))
print(words_to_marks('friends'))
print(words_to_marks('family'))
print(words_to_marks('selfness'))
print(words_to_marks('knowledge'))
