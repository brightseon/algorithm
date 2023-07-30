def chained(functions):
    def func(arg):
        result = arg

        for func in functions:
            result = func(result)

        return result

    return func


def f1(x): return x*2
def f2(x): return x+2
def f3(x): return x**2


def f4(x): return x.split()
def f5(xs): return [x[::-1].title() for x in xs]
def f6(xs): return "_".join(xs)


print(chained([f1, f2, f3])(0))
print(chained([f1, f2, f3])(2))
print(chained([f3, f2, f1])(2))
print(chained([f4, f5, f6])("lorem ipsum dolor"))
