phrases = ['not at all', 'I love you', 'a little', 'a lot', 'passionately', 'madly']

def how_much_i_love_you(nb_petals):
    return phrases[nb_petals % 6]

print(how_much_i_love_you(7))
print(how_much_i_love_you(3))
print(how_much_i_love_you(6))