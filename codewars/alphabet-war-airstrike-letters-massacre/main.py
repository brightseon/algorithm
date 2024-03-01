import re


def alphabet_war(fight):
    LEFT = {'w': 4, 'p': 3, 'b': 2, 's': 1}
    RIGHT = {'m': 4, 'q': 3, 'd': 2, 'z': 1}
    letters = re.sub('\w?\*\w?', '', fight)
    left = 0
    right = 0

    for l in letters:
        if LEFT.get(l):
            left += LEFT[l]

        if RIGHT.get(l):
            right += RIGHT[l]

    if left > right:
        return 'Left side wins!'

    if left < right:
        return 'Right side wins!'

    return "Let's fight again!"


print(alphabet_war("z"))
print(alphabet_war("****"))
print(alphabet_war("z*dq*mw*pb*s"))
print(alphabet_war("zdqmwpbs"))
print(alphabet_war("zz*zzs"))
print(alphabet_war("sz**z**zs"))
print(alphabet_war("z*z*z*zs"))
print(alphabet_war("*wwwwww*z*"))
print(alphabet_war("w****z"))
print(alphabet_war("mb**qwwp**dm"))
