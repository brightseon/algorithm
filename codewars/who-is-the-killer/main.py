def killer(suspect_info, dead):
  for suspect, seen_people in suspect_info.items():
    if all(person in seen_people for person in dead):
      return suspect


print(
  killer(
    {
      'James': ['Jacob', 'Bill', 'Lucas'],
      'Johnny': ['David', 'Kyle', 'Lucas'],
      'Peter': ['Lucy', 'Kyle']
    }, ['Lucas', 'Bill']))
print(killer({'Brad': [], 'Megan': ['Ben', 'Kevin'], 'Finn': []}, ['Ben']))
