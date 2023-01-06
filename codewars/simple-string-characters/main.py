import re


def check_len(pattern, s):
  return len(list(re.finditer(pattern, s)))


def solve(s):
  return [
    check_len('[A-Z]', s),
    check_len('[a-z]', s),
    check_len('\d', s),
    check_len('[^A-Za-z0-9]', s)
  ]


print(solve("Codewars@codewars123.com"))
print(solve("bgA5<1d-tOwUZTS8yQ"))
print(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"))
print(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"))
print(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"))
print(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"))
