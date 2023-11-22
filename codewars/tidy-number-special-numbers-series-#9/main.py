def tidyNumber(n):
    return n == int(''.join(sorted(str(n))))


print(tidyNumber(12))
print(tidyNumber(102))
print(tidyNumber(9672))
print(tidyNumber(2789))
