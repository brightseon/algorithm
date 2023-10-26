import re


def nickname_generator(name):
    if len(name) < 4:
        return 'Error: Name too short'

    if re.match('a|e|i|o|u', name[2]) == None:
        return name[0:3]

    return name[0:4]


print(nickname_generator("Jimmy"))
print(nickname_generator("Samantha"))
print(nickname_generator("Sam"))
print(nickname_generator("Kayne"))
print(nickname_generator("Melissa"))
print(nickname_generator("James"))

print(nickname_generator('Jeannie'))
