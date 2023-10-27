def initialize_names(name):
    name_chunk = name.split(' ')

    if len(name_chunk) < 3:
        return name

    return f'{name_chunk[0]} {" ".join([n[0].upper() + "." for n in name_chunk[1:-1]])} {name_chunk[-1]}'


print(initialize_names('Jack Ryan'))
print(initialize_names('Lois Mary Lane'))
print(initialize_names('Dimitri'))
print(initialize_names('Alice Betty Catherine Davis'))
