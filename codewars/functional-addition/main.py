def add(n):
    def do_add(n2):
        return n + n2

    return do_add


add_one = add(1)
print(add_one(3))

add_three = add(3)
print(add_three(3))
