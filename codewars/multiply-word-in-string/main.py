def modify_multiply(st, loc, num):
  return ((st.split(' ')[loc] + '-') * num)[0:-1]


print(modify_multiply("This is a string", 3, 5))
print(
  modify_multiply(
    "Creativity is the process of having original ideas that have value. It is a process; it's not random.",
    8, 10))
print(
  modify_multiply(
    "Self-control means wanting to be effective at some random point in the infinite radiations of my spiritual existence",
    1, 1))
print(
  modify_multiply(
    "Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",
    6, 8))
print(
  modify_multiply(
    "Everything happening around me is very random. I am enjoying the phase, as the journey is far more enjoyable than the destination.",
    2, 5))
