def chain(init_val, functions):
    if len(functions) == 0:
        return init_val

    return chain(functions[0](init_val), functions[1:])


def add10(x): return x + 10
def mul30(x): return x * 30


print(chain(42, []))
print(chain(50, [mul30]))
print(chain(50, [mul30, add10]))
print(chain(50, [add10, mul30]))
