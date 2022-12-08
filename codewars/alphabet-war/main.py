LEFT = 'sbpw'
RIGHT = 'zdqm'


def alphabet_war(fight):
    l = 0
    r = 0

    for s in list(fight):
        l_idx = LEFT.find(s)
        r_idx = RIGHT.find(s)

        if l_idx != -1:
            l += l_idx + 1
        if r_idx != -1:
            r += r_idx + 1

    if l > r:
        return 'Left side wins!'
    if r > l:
        return 'Right side wins!'

    return "Let's fight again!"


print(alphabet_war("z"))
print(alphabet_war("zdqmwpbs"))
print(alphabet_war("wq"))
print(alphabet_war("zzzzs"))
print(alphabet_war("wwwwww"))
