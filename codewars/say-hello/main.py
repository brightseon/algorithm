def greet(name):
    if not name:
        return None

    return f'hello {name}!'


print(greet("Niks"))
print(greet("Nick"))
print(greet(""))
print(greet(None))
