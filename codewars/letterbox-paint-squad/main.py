def paint_letterboxes(start, finish):
  arr = [0] * 10

  for n in range(start, finish + 1):
    for s in list(str(n)):
      arr[int(s)] += 1

  return arr


print(paint_letterboxes(125, 132))
