def mxdiflg(a1, a2):
  if len(a1) == 0 or len(a2) == 0:
    return -1

  a1_len = list(map(lambda a: len(a), a1))
  a2_len = list(map(lambda a: len(a), a2))

  return max([max(a1_len) - min(a2_len), max(a2_len) - min(a1_len)])


s1 = [
  "hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt",
  "znnnnfqknaz", "qqquuhii", "dvvvwz"
]
s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
print(mxdiflg(s1, s2))

s1 = [
  "ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb",
  "oocccffuucccjjjkkkjyyyeehh"
]
s2 = ["bbbaaayddqbbrrrv"]
print(mxdiflg(s1, s2))

s2 = []
s1 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
print(mxdiflg(s1, s2))
