def vert_mirror(strng):
    return '\n'.join([''.join(reversed(list(s)))
                      for s in strng.split('\n')])


def hor_mirror(strng):
    return '\n'.join(reversed(strng.split('\n')))


def oper(fct, s):
    return fct(s)


print(oper(vert_mirror, 'hSgdHQ\nHnDMao\nClNNxX\niRvxxH\nbqTVvA\nwvSyRu'))
print(oper(vert_mirror, 'IzOTWE\nkkbeCM\nWuzZxM\nvDddJw\njiJyHF\nPVHfSx'))
print(oper(hor_mirror, 'lVHt\nJVhv\nCSbg\nyeCt'))
print(oper(hor_mirror, 'njMK\ndbrZ\nLPKo\ncEYz'))
