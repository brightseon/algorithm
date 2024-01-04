import re


def gordon(a):
  return ' '.join(
    map(lambda s: re.sub('I|O|U|E', '*', s.replace('A', '@')) + '!!!!',
        a.upper().split(' ')))


print(gordon('What feck damn cake'))
print(gordon('are you stu pid'))
print(gordon('i am a chef'))
print(gordon('dont you talk tome'))
print(gordon('how dare you feck'))
