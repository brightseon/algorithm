from functools import reduce

def divisors(integer):
    results = reduce(lambda acc, cur: acc + [cur] if integer % cur == 0 else acc, range(2, integer), [])

    return '%s is prime' % integer if len(results) == 0 else list(results)

print(divisors(15));
print(divisors(253));
print(divisors(24));
print(divisors(25));
print(divisors(13));
print(divisors(3));
print(divisors(29));