from re import match, I


def vowel_2_index(string):
  return ''.join([
    str(i + 1) if match('a|e|i|o|u', s, I) is not None else s
    for i, s in enumerate(string)
  ])


print(vowel_2_index('this is my string'))
print(vowel_2_index('Codewars is the best site in the world'))
print(vowel_2_index('Tomorrow is going to be raining'))
print(vowel_2_index(''))
print(
  vowel_2_index(
    "90's cornhole Austin, pickled butcher yr messenger bag gastropub next level leggings listicle meditation try-hard Vice. Taxidermy gastropub gentrify, meh fap organic ennui fingerstache pickled vegan. Seitan sustainable PBR&B cornhole VHS. Jean shorts actually bitters ugh blog Intelligentsia. Artisan Kickstarter DIY, fixie cliche salvia lo-fi four loko. PBR&B Odd Future ugh fingerstache cray Wes Anderson chia typewriter iPhone bespoke four loko, Intelligentsia photo booth direct trade. Aesthetic Tumblr Portland XOXO squid, synth viral listicle skateboard four dollar toast cornhole Blue Bottle semiotics."
  ))
