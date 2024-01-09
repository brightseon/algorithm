def filter_long_words(sentence, n):
  return list(filter(lambda s: len(s) > n, sentence.split()))


print(filter_long_words('The quick brown fox jumps over the lazy dog', 4))
print(
  filter_long_words(
    'Write a function filter_long_words() that takes a sentence and an integer n and returns the list of words that are longer than n.',
    4))
print(
  filter_long_words(
    'Write a function filter_long_words() that takes a sentence and an integer n and returns the list of words that are longer than n.',
    5))
print(
  filter_long_words(
    'Write a function filter_long_words() that takes a sentence and an integer n and returns the list of words that are longer than n.',
    6))
print(
  filter_long_words(
    'Write a function filter_long_words() that takes a sentence and an integer n and returns the list of words that are longer than n.',
    7))
print(
  filter_long_words(
    'Write a function filter_long_words() that takes a sentence and an integer n and returns the list of words that are longer than n.',
    8))
