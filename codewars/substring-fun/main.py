def nth_char(words):
    return ''.join([w[i] for i, w in enumerate(words)])


print(nth_char(['yoda', 'best', 'has']))
print(nth_char([]))
print(nth_char(['X-ray']))
print(nth_char(['No', 'No']))
print(nth_char(['Chad', 'Morocco', 'India', 'Algeria',
      'Botswana', 'Bahamas', 'Ecuador', 'Micronesia']))
