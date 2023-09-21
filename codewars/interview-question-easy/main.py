import re


def get_strings(city):
  chars = re.sub('[^a-zA-Z]', '', city).lower()
  output = []
  for c in chars:
    count = city.lower().count(c)
    txt = f'{c}:{"*" * count}'

    if txt not in output:
      output.append(txt)

  return ','.join(output)


print(get_strings("Chicago"))
print(get_strings("Bangkok"))
print(get_strings("Las Vegas"))
