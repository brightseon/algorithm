def find_odd_names(lst):
    return list(filter(lambda l: sum([ord(n) for n in l['firstName']]) % 2 != 0, lst))


list1 = [
    {'firstName': 'Aba', 'lastName': 'N.', 'country': 'Ghana',
        'continent': 'Africa', 'age': 21, 'language': 'Python'},
    {'firstName': 'Abb', 'lastName': 'O.', 'country': 'Israel',
        'continent': 'Asia', 'age': 39, 'language': 'Java'}
]
list2 = [
    {'firstName': 'Aba', 'lastName': 'N.', 'country': 'Ghana',
        'continent': 'Africa', 'age': 21, 'language': 'Python'},
]

print(find_odd_names(list1))
print(find_odd_names(list2))
