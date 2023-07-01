def crap(garden, bags, cap):
    flat_list = sum(garden, [])
    replace_garden = ''.join(flat_list).replace('_', '')

    if len(replace_garden.split('D')) > 1:
        return 'Dog!!'

    if len(replace_garden) > bags * cap:
        return 'Cr@p'

    return 'Clean'


print(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 2, 2))
print(crap([['_', '_', '_', '_'], ['_', '_', '_', '@'], ['_', '_', '@', '_']], 1, 1))
print(crap([['_', '_'], ['_', '@'], ['D', '_']], 2, 2))
print(crap([['_', '_', '_', '_'], ['_', '_', '_', '_'], ['_', '_', '_', '_']], 2, 2))
print(crap([['@', '@'], ['@', '@'], ['@', '@']], 3, 2))
