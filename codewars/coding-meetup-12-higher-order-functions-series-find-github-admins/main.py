def find_admin(lst, lang):
  return list(
    filter(lambda l: l['language'] == lang and l['githubAdmin'] == 'yes', lst))


print(
  find_admin([{
    'firstName': 'Harry',
    'lastName': 'K.',
    'country': 'Brazil',
    'continent': 'Americas',
    'age': 22,
    'language': 'JavaScript',
    'githubAdmin': 'yes'
  }, {
    'firstName': 'Kseniya',
    'lastName': 'T.',
    'country': 'Belarus',
    'continent': 'Europe',
    'age': 49,
    'language': 'Ruby',
    'githubAdmin': 'no'
  }, {
    'firstName': 'Jing',
    'lastName': 'X.',
    'country': 'China',
    'continent': 'Asia',
    'age': 34,
    'language': 'JavaScript',
    'githubAdmin': 'yes'
  }, {
    'firstName': 'Piotr',
    'lastName': 'B.',
    'country': 'Poland',
    'continent': 'Europe',
    'age': 128,
    'language': 'JavaScript',
    'githubAdmin': 'no'
  }], 'JavaScript'))
print(
  find_admin([{
    'firstName': 'Harry',
    'lastName': 'K.',
    'country': 'Brazil',
    'continent': 'Americas',
    'age': 22,
    'language': 'JavaScript',
    'githubAdmin': 'yes'
  }, {
    'firstName': 'Kseniya',
    'lastName': 'T.',
    'country': 'Belarus',
    'continent': 'Europe',
    'age': 49,
    'language': 'Ruby',
    'githubAdmin': 'no'
  }, {
    'firstName': 'Jing',
    'lastName': 'X.',
    'country': 'China',
    'continent': 'Asia',
    'age': 34,
    'language': 'JavaScript',
    'githubAdmin': 'yes'
  }, {
    'firstName': 'Piotr',
    'lastName': 'B.',
    'country': 'Poland',
    'continent': 'Europe',
    'age': 128,
    'language': 'JavaScript',
    'githubAdmin': 'no'
  }], 'Ruby'))
print(
  find_admin([{
    'firstName': 'Harry',
    'lastName': 'K.',
    'country': 'Brazil',
    'continent': 'Americas',
    'age': 22,
    'language': 'JavaScript',
    'githubAdmin': 'yes'
  }, {
    'firstName': 'Kseniya',
    'lastName': 'T.',
    'country': 'Belarus',
    'continent': 'Europe',
    'age': 49,
    'language': 'Ruby',
    'githubAdmin': 'no'
  }, {
    'firstName': 'Jing',
    'lastName': 'X.',
    'country': 'China',
    'continent': 'Asia',
    'age': 34,
    'language': 'JavaScript',
    'githubAdmin': 'yes'
  }, {
    'firstName': 'Piotr',
    'lastName': 'B.',
    'country': 'Poland',
    'continent': 'Europe',
    'age': 128,
    'language': 'JavaScript',
    'githubAdmin': 'no'
  }], 'Python'))
