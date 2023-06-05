import re


def solve(s):
    return max(map(lambda match: len(match), re.findall('[aeiou]+', s)))


print(solve("codewarriors"))
print(solve("suoidea"))
print(solve("ultrarevolutionariees"))
print(solve("strengthlessnesses"))
print(solve("cuboideonavicuare"))
print(solve("chrononhotonthuooaos"))
print(solve("iiihoovaeaaaoougjyaw"))
