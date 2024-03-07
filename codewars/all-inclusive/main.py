def contain_all_rots(strng, arr):
  rotations = [strng[i:] + strng[:i] for i in range(len(strng))]

  return all(rotation in arr for rotation in rotations)


print(contain_all_rots("", []))
print(contain_all_rots("", ["bsjq", "qbsj"]))
print(contain_all_rots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]))
print(
  contain_all_rots("XjYABhR", [
    "TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX",
    "XjYABhR", "ABhRXjY"
  ]))