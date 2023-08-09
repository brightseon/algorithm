#preloaded variable: "dictionary"


def make_backronym(acronym):
  return ' '.join([dictionary[a.upper()] for a in acronym])


print(make_backronym("dgm"))
print(make_backronym("lkj"))
print(make_backronym('interesting'))
print(make_backronym('codewars'))
