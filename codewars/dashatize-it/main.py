import re


def dashatize(n):
    return re.sub(r'([13579])', r'-\1-', str(abs(n))).replace('--', '-').strip('-')


print(dashatize(274))
print(dashatize(5311))
print(dashatize(86320))
print(dashatize(974302))

print(dashatize(0))
print(dashatize(-1))
print(dashatize(-28369))
