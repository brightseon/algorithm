def create_dict(keys, values):
    dict = {}

    for i, k in enumerate(keys):
        try:
            dict[k] = values[i]
        except:
            dict[k] = None

    return dict


print(create_dict(['a', 'b', 'c', 'd'], [1, 2, 3]))
print(create_dict(['a', 'b', 'c'], [1, 2, 3, 4]))
